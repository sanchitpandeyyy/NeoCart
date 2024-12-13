import React from "react";
import Banner from "../components/banner";
import Card from "@/app/products/Card";

const Home = () => {
  return (
    <div className="mt-2">
      <Banner />
      <p className="pl-4 text-2xl font-semibold">Hot Deals</p>
      <Card />
    </div>
  );
};

export default Home;
