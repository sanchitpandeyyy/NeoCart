import React from "react";
import Card from "@/app/products/Card";
import HeroLander from "@/components/custom/HeroLander";
import HotDeals from "./components/ProductScroll";

const Home = () => {
  return (
    <div className="mt-2 container">
      <HeroLander />
      <HotDeals />
      <p className="pl-4 text-2xl font-semibold">Hot Deals</p>
      <Card />
    </div>
  );
};

export default Home;
