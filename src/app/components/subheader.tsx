import Link from "next/link";
import React from "react";

const subheader = () => {
  return (
    <div className="bg-secondary flex gap-20  text-white h-16 items-center justify-start pl-8">
      <Link href="/about">About</Link>
      <Link href="/terms">Terms & Conditions</Link>
      <Link href="/products">All Products</Link>
    </div>
  );
};

export default subheader;
