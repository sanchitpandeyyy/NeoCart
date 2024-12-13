"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount((prev) => prev + 1);
  const decreaseCount = () => setCount((prev) => Math.max(prev - 1, 0));

  return (
    <div className="flex items-center gap-4 mt-4">
      <button
        className="bg-gray-200 px-4 py-2 rounded-l-md hover:bg-gray-300"
        onClick={decreaseCount}
      >
        -
      </button>
      <span className="px-6 py-2 border-t border-b">{count}</span>
      <button
        className="bg-gray-200 px-4 py-2 rounded-r-md hover:bg-gray-300"
        onClick={increaseCount}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
