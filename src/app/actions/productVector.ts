import { DataAPIClient } from "@datastax/astra-db-ts";
import { GoogleGenerativeAI } from "@google/generative-ai";
const {
  ASTRA_DB_APPLICATION_TOKEN,
  ASTRA_DB_NAMESPACE,
  ASTRA_DB_COLLECTION,
  ASTRA_DB_API_ENDPOINT,
  GOOGLE_AI_API_KEY,
} = process.env;

const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(ASTRA_DB_API_ENDPOINT as string, {
  namespace: ASTRA_DB_NAMESPACE,
});

const genAI = new GoogleGenerativeAI(GOOGLE_AI_API_KEY as string);
const embeddingModel = genAI.getGenerativeModel({
  model: "text-embedding-004",
});

interface Data {
  [key: string]: string | number | boolean | object;
}

interface EmbeddingResult {
  embedding: {
    values: number[];
  };
}

export const addToVectorDB = async (data: Data): Promise<void> => {
  console.log(data);
  const collection = await db.collection(ASTRA_DB_COLLECTION as string);
  const result: EmbeddingResult = await embeddingModel.embedContent(
    JSON.stringify(data)
  );
  const vector: number[] = result.embedding.values;
  const res = await collection.insertOne({
    $vector: vector,
    text: data,
  });
  console.log("added document", res.insertedId);
};
