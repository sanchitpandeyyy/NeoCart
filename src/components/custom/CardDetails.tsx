"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Counter from "./ProductCounter";

const data = [
  {
    image: "/images/image 58.png",
    name: "MILK CHURPI",
    price: 250,
    stock: "150 in stock",
    text: "Introducing Milk Chhurpi: a chewy snack made from pure milk. It's creamy, tangy, and full of goodness. Packed with calcium and protein, it's a delicious and nutritious treat for any time of day. Enjoy it on its own or use it to add flavor to your favorite dishes. Experience the authentic taste of tradition in every bite with Milk Chhurpi.",
    add: "Add to Cart",
    btn: "Buy Now",
    rating: 4,
  },
];

const CardDetails = () => {
  const [openDrawerIndex, setOpenDrawerIndex] = useState<number | null>(null);
  const [counts, setCounts] = useState<number[]>(data.map(() => 0));

  const handleIncrease = (index: number) => {
    setCounts((prev) =>
      prev.map((count, i) => (i === index ? count + 1 : count))
    );
  };

  const handleDecrease = (index: number) => {
    setCounts((prev) =>
      prev.map((count, i) => (i === index ? Math.max(count - 1, 0) : count))
    );
  };

  const resetCounter = (index: number) => {
    setCounts((prev) => prev.map((count, i) => (i === index ? 0 : count)));
  };

  const handleCloseDrawer = () => {
    if (openDrawerIndex !== null) resetCounter(openDrawerIndex);
    setOpenDrawerIndex(null);
  };

  return (
    <div className="p-4 md:p-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="border grid grid-cols-1 md:grid-cols-12 rounded-lg p-4 shadow-md items-center mb-6 gap-4"
        >
          <div className="md:col-span-5 flex justify-center">
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
              className="rounded-lg w-full max-w-xs md:w-[350px] object-cover"
            />
          </div>
          <div className="md:col-span-7 flex flex-col gap-2">
            <h3 className="text-lg md:text-xl font-semibold mt-2 flex items-center gap-2">
              {item.name}
            </h3>
            <p className="text-gray-500 text-sm md:text-base">
              Price: RS {item.price}
            </p>
            <p className="text-green-600 text-sm md:text-base">{item.stock}</p>
            <p className="text-gray-700 text-sm md:text-base mt-2">
              {item.text}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <button className="rounded-md px-4 py-2 bg-green-400 text-white text-sm md:text-base">
                {item.add}
              </button>
              <button
                className="rounded-md px-4 py-2 text-white bg-[#2252a1] text-sm md:text-base"
                onClick={() => setOpenDrawerIndex(index)}
              >
                {item.btn}
              </button>
            </div>
          </div>
        </div>
      ))}

      {openDrawerIndex !== null && (
        <Drawer open={true} onOpenChange={handleCloseDrawer}>
          <DrawerTrigger />
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{data[openDrawerIndex].name}</DrawerTitle>
              <DrawerDescription>
                Adjust the quantity of the product and proceed.
              </DrawerDescription>
            </DrawerHeader>
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm md:text-base">
                Price per unit: RS {data[openDrawerIndex].price}
              </p>
              <Counter
                count={counts[openDrawerIndex]}
                onIncrease={() => handleIncrease(openDrawerIndex)}
                onDecrease={() => handleDecrease(openDrawerIndex)}
              />
              <p className="text-lg font-semibold mt-4">
                Total: RS{" "}
                {data[openDrawerIndex].price * counts[openDrawerIndex]}
              </p>
            </div>
            <DrawerFooter className="flex justify-end gap-4">
              <Button
                className="text-white"
                onClick={() => {
                  console.log("Submitted");
                  handleCloseDrawer();
                }}
              >
                Submit
              </Button>
              <DrawerClose asChild>
                <Button variant="outline" onClick={handleCloseDrawer}>
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default CardDetails;
