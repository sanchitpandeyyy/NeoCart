"use server";

import prisma from "@/lib/prisma";

export const addProduct = async (data) => {
  console.log("Adding product");

  const res = await prisma.product.create({
    data: {
      name: "name",
      desc: "desc",
      images: ["dfdf"],
      price: 12233,
      category: ["data.category "],
      hotDeals: false,
    },
  });
  console.log("Product added", res);

  //   name: 'Todd Kirkland',
  //   desc: 'Et est quibusdam qu',
  //   images: 'https://www.vyjocol.com',
  //   price: '785',
  //   category: 'Toys',
  //   hotDeals: false
};
