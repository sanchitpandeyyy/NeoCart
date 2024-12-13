"use client";
import React from "react";

const Counter = ({
  count,
  onIncrease,
  onDecrease,
}: {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}) => {
  return (
    <div className="flex items-center gap-4 mt-4">
      <button
        className="bg-gray-200 px-4 py-2 rounded-l-md hover:bg-gray-300"
        onClick={onDecrease}
      >
        -
      </button>
      <span className="px-6 py-2 border-t border-b">{count}</span>
      <button
        className="bg-gray-200 px-4 py-2 rounded-r-md hover:bg-gray-300"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
