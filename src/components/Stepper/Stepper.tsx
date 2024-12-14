"use client";
import PaymentMethods from "@/components/payment-method";
import Summary from "@/app/products/checkout/Billing";
import CartReview from "@/app/products/checkout/CartReview";
import React, { useState } from "react";
import { useCart } from "../../app/products/cart/CartContext";

const steps = [
  { id: 1, label: "Cart Review", btn: "Next" },
  { id: 2, label: "Shipping Information", btn: "Place Order" },
  { id: 3, label: "Payment Method", btn: "Confirm" },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { cart, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Payment Process</h1>

      {/* Stepper */}
      <div className="flex justify-between items-center mb-8">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                currentStep === step.id
                  ? "bg-blue-500 text-white border-blue-500"
                  : currentStep > step.id
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-gray-200 text-gray-600 border-gray-300"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm mt-2 ${
                currentStep >= step.id ? "text-blue-500" : "text-gray-500"
              }`}
            >
              {step.label}
            </p>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="border p-6 rounded-lg shadow-md bg-white">
        {currentStep === 1 && (
          <p className="text-gray-700 flex gap-8 flex-col h-fit ">
            Review the items in your cart before proceeding to checkout.
            <CartReview />
          </p>
        )}
        {currentStep === 2 && (
          <p className="text-gray-700 flex gap-8 flex-col h-fit ">
            Provide your shipping address to calculate delivery options.
            <Summary />
          </p>
        )}
        {currentStep === 3 && (
          <p className="text-gray-700 ">
            <PaymentMethods totalPrice={totalPrice} />
          </p>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          className={`px-4 py-2 rounded-md text-white ${
            currentStep === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-500 hover:bg-gray-600"
          }`}
          disabled={currentStep === 1}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className={`px-4 py-2 rounded-md text-white ${
            currentStep === steps.length
              ? "bg-green-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={currentStep === steps.length}
          onClick={handleNext}
        >
          {steps[currentStep - 1].btn}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
