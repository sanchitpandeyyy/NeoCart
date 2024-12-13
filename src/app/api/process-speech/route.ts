/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: Request) {
  try {
    const { nepaliSpeech } = await request.json();

    if (!process.env.GOOGLE_GEMINI_API_KEY) {
      return NextResponse.json(
        {
          error: "API key is missing",
        },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-002" });

    const prompt = `
      Convert the following Nepali speech to a structured JSON with these requirements:
      1. Extract a concise product title in English
      2. Create a detailed English description of around 100 words in best relavent way, min 60 word.
      3. List useful tags for the product like, name of the product or its use (overaly tags related to the product) minum 5 tags max 10 tags
      4. Identify the exact price in numerical format

      Input Nepali Speech: "${nepaliSpeech}"

      Alwyas Respond ONLY with a valid JSON object matching this structure:
      {
        "title": "Product Name",
        "description": "Detailed product description in English",
        "tags": ["tag 1", "tag 2"],
        "price": 00000
      }
    `;

    const result = await model.generateContent(prompt);
    const jsonResponse = result.response.text().trim();

    console.log("Speech processing result:", jsonResponse);

    // Remove markdown formatting and parse

    let cleanJSON = "";
    try {
      cleanJSON = jsonResponse
        .replace(/```json?/g, "")
        .replace(/```/g, "")
        .trim();
    } catch (_) {
      cleanJSON = jsonResponse
        .replace(/```JSON?/g, "")
        .replace(/```/g, "")
        .trim();
    }

    const parsedJSON = JSON.parse(cleanJSON);

    return NextResponse.json(parsedJSON);
  } catch (error) {
    console.error("Speech processing error:", error);
    return NextResponse.json({
      title: "Error Occure",
      description: "Error Occure while processing the speech",
      tags: ["", ""],
      price: "---",
    });
  }
}
