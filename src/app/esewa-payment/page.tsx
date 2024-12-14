"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Script from "next/script";
import { useCart } from "../../app/products/cart/CartContext";

export default function KhaltiPayment() {
  const router = useRouter();
  const { cart, getTotalPrice, getProductName } = useCart();
  const [transactionId, setTransactionId] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  // Get amount and product name from the cart
  const amount = getTotalPrice().toString();
  const productName = cart.map((item) => item.name).join(", "); // Combine all product names

  useEffect(() => {
    const fetchDummyData = async () => {
      if (!amount || !productName) return;

      try {
        const response = await fetch(
          `/api/dummy-data?method=khalti&totalPrice=${amount}&productName=${productName}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch dummy data");
        }
        const data = await response.json();
        setTransactionId(data.transactionId);
      } catch (error) {
        console.error("Error fetching dummy data:", error);
      }
    };

    fetchDummyData();
  }, [amount, productName]);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/initiate-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          method: "khalti",
          amount,
          productName,
          transactionId,
        }),
      });

      if (!response.ok) {
        throw new Error("Payment initiation failed");
      }

      const data = await response.json();

      if (!data.khaltiPaymentUrl) {
        throw new Error("Khalti payment URL not received");
      }
      window.location.href = data.khaltiPaymentUrl;
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment initiation failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Script
        src="https://khalti.s3.ap-south-1.amazonaws.com/KPG/dist/2020.12.22.0.0.0/khalti-checkout.iffe.js"
        strategy="lazyOnload"
      />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-md mx-4">
          <CardHeader>
            <CardTitle>Khalti Payment</CardTitle>
            <CardDescription>
              Complete your payment using Khalti
            </CardDescription>
          </CardHeader>
          <form onSubmit={handlePayment}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (NPR)</Label>
                <Input id="amount" type="text" value={amount} readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="productName">Product Name</Label>
                <Input
                  id="productName"
                  type="text"
                  value={productName}
                  readOnly
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="transactionId">Transaction ID</Label>
                <Input
                  id="transactionId"
                  type="text"
                  value={transactionId}
                  readOnly
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Processing..." : "Pay with Khalti"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
