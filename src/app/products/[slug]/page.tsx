"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Image from "next/image";
import { useCart } from "../cart/CartContext";
import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerClose,
  DrawerDescription,
} from "@/components/ui/drawer";
import Counter from "../../components/ProductCounter";


const products = [
  {
    slug: "milk-churpi",
    image: "/images/image 58.png",
    name: "Milk Churpi",
    price: 250,
    stock: "150 in stock",
    text: "Introducing Milk Chhurpi: a chewy snack made from pure milk. It's creamy, tangy, and full of goodness. Packed with calcium and protein, it's a delicious and nutritious treat for any time of day.",
    add: "Add to Cart",
    btn: "Buy Now",
    rating: 4,
  },
  {
    slug: "yarsagumba",
    image: "/images/image 58.png",
    name: "Yarsagumba",
    price: 500,
    stock: "50 in stock",
    text: "Yarsagumba is a rare herb found in the Himalayan region. Known for its medicinal properties, it is a natural energy booster.",
    add: "Add to Cart",
    btn: "Buy Now",
    rating: 5,
  },
  {
    slug: "fresh-orange",
    image: "/images/apple.jpg",
    name: "Fresh Orange",
    price: 100,
    stock: "200 in stock",
    text: "Fresh Orange: A refreshing citrus fruit rich in Vitamin C and bursting with natural sweetness.",
    add: "Add to Cart",
    btn: "Buy Now",
    rating: 4,
  },
  {
    slug: "himalayan-salt",
    image: "/images/apple.jpg",
    name: "Himalayan Salt",
    price: 50,
    stock: "500 in stock",
    text: "Himalayan Salt: Natural rock salt sourced from the Himalayas, perfect for seasoning and therapeutic uses.",
    add: "Add to Cart",
    btn: "Buy Now",
    rating: 5,
  },
];

const ProductPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [product, setProduct] = useState<(typeof products)[0] | null>(null);
  const [count, setCount] = useState(0);
  const { addToCart } = useCart();
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      const resolvedParams = await params; // Await the Promise to get the resolved params
      const matchedProduct = products.find(
        (prod) => prod.slug === resolvedParams.slug
      );
      setProduct(matchedProduct || null);
    };

    fetchProduct();
  }, [params]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: product.name, href: `/products/${product.slug}` },
  ];

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(Math.max(count - 1, 0));

  const handleAddToCart = () => {
    addToCart(product.slug, product.name, product.price);
    setCount(0);
    router.push("/products/cart");
  };

  return (
    <div className="p-6">
      <Breadcrumb items={breadcrumbItems} />
      <div className="border grid grid-cols-12 rounded-lg p-4 shadow-md items-center mb-6">
        <div className="col-span-5">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div className="col-span-7 flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-500">Price: RS {product.price}</p>
          <p className="text-green-600">{product.stock}</p>
          <p className="text-gray-700 mt-2">{product.text}</p>
          <div className="flex items-center gap-8 mt-4">
            <Button
              onClick={handleAddToCart}
              className="rounded-md px-4 py-2 bg-green-400 text-white"
            >
              {product.add}
            </Button>
            <Button
              className="rounded-md px-4 py-2 text-white bg-[#2252a1]"
              onClick={() => setOpenDrawer(true)}
            >
              {product.btn}
            </Button>
          </div>
        </div>
      </div>

      {/* Drawer for detailed view */}
      <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
        <DrawerTrigger />
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{product.name}</DrawerTitle>
            <DrawerDescription>
              Adjust the quantity of the product and proceed.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col items-center gap-4">
            <p>Price per unit: RS {product.price}</p>
            <Counter
              count={count}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <p className="text-lg font-semibold mt-4">
              Total: RS {product.price * count}
            </p>
          </div>
          <DrawerFooter className="flex justify-end gap-4">
            <Button className="text-white" onClick={() => setOpenDrawer(false)}>
              Submit
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" onClick={() => setOpenDrawer(false)}>
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ProductPage;
