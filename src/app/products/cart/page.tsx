"use client";
import Counter from "@/components/custom/ProductCounter";
import { useCart } from "../cart/CartContext";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cart, clearCart, addToCart, removeFromCart } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    alert("Proceeding to checkout..."); //
    router.push("/checkout");
  };

  const handleIncreaseQuantity = (id: string) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      addToCart(item.id, item.name, item.price);
    }
  };

  const handleDecreaseQuantity = (id: string) => {
    const item = cart.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      addToCart(item.id, item.name, item.price); // Decrease quantity by 1
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-xl text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-4"
              >
                <div className="flex gap-4 items-center">
                  <span className="text-xl font-medium text-gray-800">
                    {item.name}
                  </span>
                  <span className="text-gray-600">
                    RS {item.price} x {item.quantity}
                  </span>
                  <Counter
                    count={item.quantity}
                    onIncrease={() => handleIncreaseQuantity(item.id)}
                    onDecrease={() => handleDecreaseQuantity(item.id)}
                  />
                </div>
                <Button
                  onClick={() => removeFromCart(item.id)}
                  variant="outline"
                  className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white transition-colors"
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-xl font-semibold text-gray-800">
              Total: RS{" "}
              {cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </p>
            <div className="flex gap-6">
              <Button
                variant="outline"
                onClick={clearCart}
                className="text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white transition-colors"
              >
                Clear Cart
              </Button>
              <Button
                onClick={handleCheckout}
                className="bg-green-500 text-white hover:bg-green-600 transition-colors"
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
