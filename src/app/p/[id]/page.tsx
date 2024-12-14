"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getProductById } from "@/app/actions/product";
import { Product } from "@/types/products";
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
import Breadcrumb from "@/components/custom/Breadcrumb";
import Counter from "@/components/custom/ProductCounter";
import Review from "@/components/custom/Review";
import { useCart } from "@/app/products/cart/CartContext";
import Image from "next/image";
import { CreditCard, ShoppingCart } from "lucide-react";

const ProductDetails = () => {
  const params = useParams<{ id: string }>();
  const productId = params.id;
  const [count, setCount] = useState(0);
  const { addToCart } = useCart();
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const fetchedProduct = await getProductById(productId);
        setProduct(fetchedProduct);
      } catch (err) {
        console.error("Failed to fetch product:", err);
        setError("Failed to load product details");
      } finally {
        setIsLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (isLoading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: product.name, href: `/products/${params.id}` },
  ];

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(Math.max(count - 1, 0));

  const handleAddToCart = () => {
    addToCart(product.id, product.name, product.price);
    setCount(0);
    router.push("/products/cart");
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumb items={breadcrumbItems} className="mb-6" />
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
            <div className="flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-2xl font-semibold text-green-600 mb-4">
                  RS {product.price}
                </p>
                <p className="text-gray-600 mb-6">{product.desc}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200 ease-in-out"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
                <Button
                  onClick={() => setOpenDrawer(true)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 ease-in-out"
                >
                  <CreditCard className="mr-2 h-5 w-5" /> Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
          <DrawerTrigger />
          <DrawerContent>
            <DrawerHeader className="border-b pb-4">
              <DrawerTitle className="text-2xl font-bold">
                {product.name}
              </DrawerTitle>
              <DrawerDescription className="text-gray-600">
                Adjust the quantity and proceed with your purchase.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-6 flex flex-col items-center gap-6">
              <p className="text-lg">
                Price per unit:{" "}
                <span className="font-semibold">RS {product.price}</span>
              </p>
              <Counter
                count={count}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
              />
              <p className="text-xl font-bold mt-4">
                Total: RS {(product.price * count).toLocaleString()}
              </p>
            </div>
            <DrawerFooter className="border-t pt-4">
              <div className="flex justify-end gap-4 w-full">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 ease-in-out"
                  onClick={() => setOpenDrawer(false)}
                >
                  Proceed to Checkout
                </Button>
                <DrawerClose asChild>
                  <Button
                    variant="outline"
                    onClick={() => setOpenDrawer(false)}
                    className="border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg transition-colors duration-200 ease-in-out"
                  >
                    Cancel
                  </Button>
                </DrawerClose>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Customer Reviews
          </h2>
          <Review />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
