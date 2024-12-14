import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: Request) {
  try {
    const { nepaliSpeech } = await request.json();

    // Validate input
    if (!nepaliSpeech) {
      return NextResponse.json(
        { error: "Nepali speech input is required" },
        { status: 400 }
      );
    }

    // Check API key
    if (!process.env.GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { error: "API key is missing" },
        { status: 500 }
      );
    }

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-002" });

    // Prompt for JSON extraction

    const prompt = `
      Convert the following Nepali speech to a structured JSON with these requirements:
      1. Extract a concise product title in English
      2. Create a detailed English description of around 100 words (min 60 words)
      3. List useful tags related to the product (min 5, max 10 tags)
      4. List relevant categories only form (spices, herbs and medicines, food, handcraft, decorative, clothing )
      5. Identify the exact price in numerical format
      
      Input Nepali Speech: "${nepaliSpeech}"
      
      Always Respond ONLY with a valid JSON object matching this structure:
      {
        "title": "Product Name",
        "description": "Detailed product description in English",
        "tags": ["tag 1", "tag 2"],
        "categories" :["category 1", "category 2"],
        "price": 00000
      }
    `;

    // Maximum retries to prevent infinite loop
    const MAX_RETRIES = 3;
    let retries = 0;

    let preRres = null;
    while (retries < MAX_RETRIES) {
      try {
        // Generate content
        console.log("pre parse", preRres);
        const result = await model.generateContent(
          preRres
            ? preRres +


                `ALWYAS RESPOND ONLY WITH A VALID JSON OBJECT MATCHING THIS STRUCTURE:
      {
        "title": "Product Name",
        "description": "Detailed product description in English",
        "tags": ["tag 1", "tag 2"],
        "categories" :["category 1", "category 2"],
        "price": 00000
      }`
            : prompt
        );

        const jsonResponse = result.response.text().trim();

        // Remove markdown and extra formatting
        const cleanJSON = jsonResponse
          .replace(/```(json)?/gi, "")
          .replace(/```/g, "")
          .trim();
        preRres = cleanJSON;

        // Parse and validate JSON
        const parsedResponse = JSON.parse(cleanJSON);

        // Validate parsed response structure
        if (
          !parsedResponse.title ||
          !parsedResponse.description ||
          !parsedResponse.tags ||
          !parsedResponse.price
        ) {
          throw new Error("Invalid JSON structure");
        }

        // Return successful response
        return NextResponse.json(parsedResponse, { status: 200 });
      } catch (error) {
        console.error(`Retry ${retries + 1} failed:`, error);
        retries++;
      }
    }

    // If all retries fail
    return NextResponse.json(
      { error: "Failed to process speech input" },
      { status: 500 }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}