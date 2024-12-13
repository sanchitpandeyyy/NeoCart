import React from "react";
import Banner from "../components/banner";
import Card from "@/components/Card";
import Counter from "../components/ProductCounter";

const Home = () => {
  return (
    <div>
      <Banner />
      <p>Hot Deals</p>
      <Card />
    </div>
  );
};

export default Home;
