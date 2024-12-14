import { DataAPIClient } from "@datastax/astra-db-ts";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

interface EnvironmentVars {
  ASTRA_DB_APPLICATION_TOKEN: string;
  ASTRA_DB_NAMESPACE: string;
  ASTRA_DB_COLLECTION: string;
  ASTRA_DB_API_ENDPOINT: string;
  GOOGLE_AI_API_KEY: string;
}

// Environment validation
const validateEnv = (): EnvironmentVars => {
  const requiredEnvVars = [
    "ASTRA_DB_APPLICATION_TOKEN",
    "ASTRA_DB_NAMESPACE",
    "ASTRA_DB_COLLECTION",
    "ASTRA_DB_API_ENDPOINT",
    "GOOGLE_AI_API_KEY",
  ];

  const missingVars = requiredEnvVars.filter(
    (varName) => !process.env[varName]
  );
  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(", ")}`
    );
  }

  return {
    ASTRA_DB_APPLICATION_TOKEN: process.env.ASTRA_DB_APPLICATION_TOKEN!,
    ASTRA_DB_NAMESPACE: process.env.ASTRA_DB_NAMESPACE!,
    ASTRA_DB_COLLECTION: process.env.ASTRA_DB_COLLECTION!,
    ASTRA_DB_API_ENDPOINT: process.env.ASTRA_DB_API_ENDPOINT!,
    GOOGLE_AI_API_KEY: process.env.GOOGLE_AI_API_KEY!,
  };
};

// Initialize clients
const initializeClients = (env: EnvironmentVars) => {
  const genAI = new GoogleGenerativeAI(env.GOOGLE_AI_API_KEY);
  const embeddingModel = genAI.getGenerativeModel({
    model: "text-embedding-004",
  });
  const chatModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash-002" });
  const client = new DataAPIClient(env.ASTRA_DB_APPLICATION_TOKEN);
  const db = client.db(env.ASTRA_DB_API_ENDPOINT, {
    namespace: env.ASTRA_DB_NAMESPACE,
  });

  return { genAI, embeddingModel, chatModel, db };
};

export async function POST(req: NextRequest) {
  try {
    // Validate environment variables
    const env = validateEnv();
    const { embeddingModel, chatModel, db } = initializeClients(env);

    // Parse and validate request
    const body = await req.json();
    const { messages } = body;

    if (!messages?.length || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid message format" },
        { status: 400 }
      );
    }

    const latestMessage = messages[messages.length - 1].content;
    // const prePrompt = `You are a customer service representative at a NEO CART (e commerce site of authontic product). A customer has said : ${latestMessage},
    // Instructions:
    //   For greetings like "Hi", "Hello", "Hey" , "what can you do for me" etc, (if promp have no clue about product request):
    //      - respond with a friendly greeting
    //      - Tell them you are here to help and recomend products
    //      - Recommend to ask what they need

    //   For prompts which are random letters or link or any other non-sense (eg: https://dfie.dfdi73u46q8o237yahsdjgfqiu374rtg):
    //   - Greetings: true
    //   - Response "Ask something meaningful",

    //   For any others request:
    //   - return original prompt

    //   Respond ONLY with a valid JSON
    //   {
    //     Greetings: true | false,
    //     PromptResponse: "Your response to the user",
    //   }
    // `;

    // const prePromptResponse = await chatModel.generateContent(prePrompt);
    // const preResponse = prePromptResponse.response.text().trim();
    // Parse and validate response
    // const cleanJSO_forPreResponse = preResponse
    //   .replace(/```json?/g, "")
    //   .replace(/```/g, "")
    //   .trim();
    // const parsedPreResponse = JSON.parse(cleanJSO_forPreResponse);
    // if (parsedPreResponse.Greetings) {
    //   const response = {
    //     preText: parsedPreResponse.PromptResponse,
    //     productData: [],
    //   };
    //   return NextResponse.json({
    //     role: "assistant",
    //     content: response,
    //     id: crypto.randomUUID(),
    //   });
    // }

    // Generate embeddings
    const vector = await embeddingModel.embedContent(latestMessage);

    // Query database
    try {
      const collection = await db.collection(env.ASTRA_DB_COLLECTION);
      const cursor = collection.find(
        {},
        {
          sort: {
            $vector: vector.embedding.values,
          },
          limit: 10,
        }
      );

      const documents = await cursor.toArray();
      const docContext = JSON.stringify(documents.map((doc) => doc.text));
      // Generate response
      const prompt = `
      Context: ${docContext}
     
      Instructions:
      For product queries:
         - Understand customer needs and preferences
         - Recommend only and only and only relevant products from the catalog which highly match their needs 100% 
         - Explain why each recommendation fits their needs
         - Try to recommend at least 1 product
     
      Respond ONLY if found 100% matching product with a valid JSON object matching this structure for this query : ${latestMessage}, 
      {
        "preText": "tell the user in a friendly way that you have found some products for them",
        "productData": [{
          "id": "id_of_the_product",
          "name": "Product name",
          "description": "Detailed product description" (generate a new description to promote the product to the user)
        }]
      }
      
      In most case you will not find any product,when you are unable to find highly matching products, always respond with valid JSON object matching this structure: 
      {
        "preText": "tell the user that {product} is not available, may be you can try something else",
        "productData": []
      }
    `;

      const result = await chatModel.generateContent(prompt);
      const response = result.response.text().trim();

      // Parse and validate response
      const cleanJSON = response
        .replace(/```json?/g, "")
        .replace(/```/g, "")
        .trim();
      const parsedJSON = JSON.parse(cleanJSON);

      // Validate the response structure
      if (!parsedJSON.preText || !Array.isArray(parsedJSON.productData)) {
        return NextResponse.json({
          role: "assistant",
          content: {
            preText:
              "I'm sorry, I am unable to find any products that meet your criteria. May I suggest you browse our other product categories?",
            productData: [],
          },
          id: crypto.randomUUID(),
        });
      }
      // Return formatted response
      return NextResponse.json({
        role: "assistant",
        content: parsedJSON,
        id: crypto.randomUUID(),
      });
    } catch (error) {
      console.error("Database or AI error:", error);
      return NextResponse.json({
        role: "assistant",
        content: {
          preText:
            "I'm sorry, I am unable to find any products that meet your criteria. May I suggest you browse our other product categories?",
          productData: [],
        },
        id: crypto.randomUUID(),
      });
    }
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
