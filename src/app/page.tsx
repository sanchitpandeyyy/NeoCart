import Card from "@/components/Card";
import React from "react";
import { Navbar } from "./components/navbar";
import Banner from "./components/banner";

const App = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <Navbar />
      <Banner />
      <Card />
    </div>
  );
};

export default App;
