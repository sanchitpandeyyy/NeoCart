"use client";
import React from "react";

import Image from "next/image";

const data = [
  {
    image: "images/apple.jpg",
    productname: "Mustang Apple",
    discount: "20% off",
    price: "Rs 400",
    priceAfter: "Rs 350",
    stars: [true, true, true, true, false], // 4 stars
    button: "Buy Now",
  },
  {
    image: "images/apple.jpg",
    productname: "Yarsagumba",
    discount: "20% off",
    price: "Rs 400",
    priceAfter: "Rs 350",
    stars: [true, true, true, true, true], // 5 stars
    button: "Buy Now",
  },
  {
    image: "images/apple.jpg",
    productname: "Fresh Orange",
    discount: "15% off",
    price: "Rs 500",
    priceAfter: "Rs 425",
    stars: [true, true, true, false, false], // 3 stars
    button: "Buy Now",
  },
  {
    image: "images/apple.jpg",
    productname: "Himalayan Salt",
    discount: "10% off",
    price: "Rs 300",
    priceAfter: "Rs 270",
    stars: [true, true, true, true, true], // 5 stars
    button: "Buy Now",
  },
];

const Card = () => {
  const renderStars = (stars: any[]) => {
    return stars.map((filled: any, index: React.Key | null | undefined) => (
      <span
        key={index}
        className={filled ? "text-yellow-500 cursor-pointer" : "text-gray-300"}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {data.map((val, i) => (
        <div
          key={i}
          className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="mb-4">
            <Image
              src="/images/apple.jpg"
              alt={val.productname}
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            {val.productname}
          </h3>
          <p className="text-red-500 font-medium">{val.discount}</p>
          <p className="text-gray-600 line-through">{val.price}</p>
          <p className="text-green-600 font-bold">{val.priceAfter}</p>
          <div className="flex items-center mt-2">{renderStars(val.stars)}</div>
          <button className="bg-secondary hover:opacity-85 text-white py-2 px-4 rounded mt-4 w-full">
            {val.button}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
