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
    <div className="flex items-center gap-2 sm:gap-4 mt-4">
      <button
        className="bg-gray-200 px-3 py-2 sm:px-4 sm:py-2 rounded-l-md hover:bg-gray-300 text-sm sm:text-base"
        onClick={onDecrease}
      >
        -
      </button>
      <span className="px-4 py-2 border-t border-b text-sm sm:text-base">
        {count}
      </span>
      <button
        className="bg-gray-200 px-3 py-2 sm:px-4 sm:py-2 rounded-r-md hover:bg-gray-300 text-sm sm:text-base"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
