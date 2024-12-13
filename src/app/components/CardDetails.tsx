
'use client'
import React, { useState } from "react";
import Image from "next/image";

const data = [
  {
    image: "/images/image 58.png",
    name: "MILK CHURPI",
    price: "RS 250",
    stock: "150 in stock",
    text: "Introducing Milk Chhurpi: a chewy snack made from pure milk. It's creamy, tangy, and full of goodness. Packed with calcium and protein, it's a delicious and nutritious treat for any time of day. Enjoy it on its own or use it to add flavor to your favorite dishes. Experience the authentic taste of tradition in every bite with Milk Chhurpi.",
    add: "Add to Cart",
    btn: "Buy Now",
    rating: 4, 
  },
];

const CardDetails = () => {
  const renderStars = (rating: number) => {
    const totalStars = 5;
    return (
      <span className="flex items-center gap-1">
        {[...Array(totalStars)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < rating ? "text-yellow-500" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </span>
    );
  };

  return (
    <>
      <div className="p-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="border grid grid-cols-12 rounded-lg p-4 shadow-md items-center"
          >
            <div className="col-span-5">
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="rounded-lg w-[350px]"
              />
            </div>
            <div className="col-span-7 flex flex-col gap-2">
              <h3 className="text-lg font-semibold mt-4 flex items-center gap-2">
                {item.name} {renderStars(item.rating)}
              </h3>
              <p className="text-gray-500">{item.price}</p>
              <p className="text-green-600">{item.stock}</p>
              <p className="text-gray-700 mt-2 text-sm">{item.text}</p>
              <div className="flex items-center gap-8 mt-4 justify-start">
                <button className="rounded-md w-fit px-4 py-2 bg-green-400 text-white">
                  {item.add}
                </button>
               
                <button className="rounded-md w-fit px-4 py-2 text-white bg-[#2252a1]">
                  {item.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardDetails;