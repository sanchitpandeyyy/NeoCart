"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const paymentMethods = [
  { name: "eSewa", color: "bg-green-500" },
  { name: "Khalti", color: "bg-purple-900" },
  { name: "Stripe", color: "bg-blue-500" },
];

export default function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const { push } = useRouter();

  const handlePayment = (method: string) => {
    switch (method) {
      case "eSewa":
        push("/esewa-payment");
        break;
      case "Khalti":
        push("/khalti-payment");
        break;
      case "Stripe":
        push("/stripe-payment");
        break;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Choose Payment Method</CardTitle>
          <CardDescription className="mt-2">
            Select your preferred payment option
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4">
          {paymentMethods.map((method) => (
            <div key={method.name} className="relative group">
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal relative overflow-hidden transition-transform duration-200 ease-in-out",
                  selectedMethod === method.name &&
                    "border-2 bg-gray-200/60 border-primary"
                )}
                onClick={() => setSelectedMethod(method.name)}
              >
                <span
                  className={cn(
                    "mr-2 h-4 w-4 rounded-full transition-all",
                    method.color
                  )}
                ></span>
                {method.name}
                {selectedMethod === method.name && (
                  <span className="absolute inset-0 bg-primary/5 opacity-50 transition-opacity duration-200"></span>
                )}
              </Button>
            </div>
          ))}
        </CardContent>

        <CardFooter>
          {selectedMethod && (
            <Button
              className="w-full bg-primary hover:bg-primary/90 transition-transform duration-150 ease-in-out transform hover:scale-105"
              onClick={() => handlePayment(selectedMethod)}
            >
              Pay with {selectedMethod}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
