"use server";

import prisma from "@/lib/prisma";

interface ProductData {
  name: string;
  desc: string;
  images: string[];
  price: number;
  category: string[];
  hotDeals: boolean;
}

export const addProduct = async (data: ProductData): Promise<void> => {
  console.log("Adding product");

  const res = await prisma.product.create({
    data: {
      name: data.name,
      desc: data.desc,
      images: data.images,
      price: data.price,
      category: data.category,
      hotDeals: data.hotDeals,
    },
  });
  console.log("Product added", res);
};
