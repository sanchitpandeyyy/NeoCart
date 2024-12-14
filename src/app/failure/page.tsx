"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { XCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

function PaymentFailureContent() {
  const searchParams = useSearchParams();
  const method = searchParams.get("method");

  useEffect(() => {
    if (method) {
      // Handle additional actions if needed based on the method.
    }
  }, [method]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 text-red-500 flex items-center justify-center animate-bounce">
              <XCircle className="w-full h-full" />
            </div>
          </div>
          <CardTitle className="text-center text-2xl font-bold text-red-700">
            Payment Failed!
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div className="text-center text-gray-600">
              <p className="mb-2">
                We encountered an issue while processing your payment. Please
                try again or contact support.
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button variant="outline" asChild className="w-full">
            <Link href="/">Return to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function PaymentFailure() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentFailureContent />
    </Suspense>
  );
}
