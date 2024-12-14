/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export const addProduct = async (data: FormData): Promise<void> => {
  try {
    const name = data.get("name") as string | null;
    const desc = data.get("desc") as string | null;
    const images = (data.getAll("images") || []).map(String);
    const price = Number(data.get("price")) || 0;
    const category = (data.getAll("category") || []).map(String);
    const hotDeals = data.get("hotDeals") === "on";

    if (!name || !desc || !price) {
      throw new Error("Missing required fields");
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        desc,
        images,
        price,
        category,
        hotDeals,
      },
    });

    redirect(process.env.NEXT_PUBLIC_URL + "/addProduct");
  } catch (error: any) {
    console.error("Failed to create product:", error.message, error.stack);
    throw new Error("Failed to create product");
  }
};
