import React from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    image: "/images/image 58.png",
    productname: "Milk Churpi",
    discount: "20% off",
    price: "Rs 400",
    priceAfter: "Rs 350",
    stars: [true, true, true, true, false],
    button: "Buy Now",
    slug: "milk-churpi",
  },
  {
    image: "/images/image 58.png",
    productname: "Yarsagumba",
    discount: "20% off",
    price: "Rs 400",
    priceAfter: "Rs 350",
    stars: [true, true, true, true, true],
    button: "Buy Now",
    slug: "yarsagumba",
  },
  {
    image: "/images/apple.jpg",
    productname: "Fresh Orange",
    discount: "15% off",
    price: "Rs 500",
    priceAfter: "Rs 425",
    stars: [true, true, true, false, false],
    button: "Buy Now",
    slug: "fresh-orange",
  },
  {
    image: "/images/apple.jpg",
    productname: "Himalayan Salt",
    discount: "10% off",
    price: "Rs 300",
    priceAfter: "Rs 270",
    stars: [true, true, true, true, true],
    button: "Buy Now",
    slug: "himalayan-salt",
  },
];

const Card = () => {
  const renderStars = (stars: boolean[]) => {
    return stars.map((filled: boolean, index: React.Key | null | undefined) => (
      <span
        key={index}
        className={filled ? "text-yellow-500 cursor-pointer" : "text-gray-300"}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-6">
      {data.map((val, i) => (
        <div
          key={i}
          className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col h-full"
        >
         
          <div className="mb-4 relative">
            <Image
              src={val.image}
              alt={val.productname}
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-48"
            />
            <p className="absolute top-2 left-2 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
              {val.discount}
            </p>
          </div>

  
          <div className="flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {val.productname}
            </h3>
            <p className="text-gray-600 line-through text-sm">{val.price}</p>
            <p className="text-green-600 font-bold text-lg">{val.priceAfter}</p>

           
            <div className="flex items-center mt-2">{renderStars(val.stars)}</div>
          </div>

     
          <Link href={`/products/${val.slug}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 w-full transition-opacity duration-200">
              {val.button}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Card;
