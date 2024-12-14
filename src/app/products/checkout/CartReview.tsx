"use client";

import React from "react";
import { useCart } from "@/app/products/cart/CartContext";
import { Button } from "@/components/ui/button";

const CartReview = () => {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white p-4 shadow-md rounded-lg ">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className="mb-4 space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between p-4 border rounded-md shadow-sm w-64"
                >
                  <div className="flex items-center gap-4">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    )}
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-gray-600">
                        {item.quantity} x Rs {item.price}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-bold text-lg">
              <p>Total:</p>
              <p>Rs {getTotalPrice()}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartReview;
