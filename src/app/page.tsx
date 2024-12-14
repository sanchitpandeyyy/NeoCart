import React from "react";
import Card from "@/app/products/Card";
import HeroLander from "@/components/custom/HeroLander";
import HotDeals from "./components/ProductScroll";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="mt-2 container">
      <HeroLander />
      <h2 className="mb-8 text-3xl font-bold">Hot Deals</h2>
      <HotDeals />
      <Card />
      <Link href="/neoAssistant" className="fixed z-20 bottom-10 right-10">
        <Image
          src="/images/neoaii.png"
          alt="neoai"
          width={700}
          height={700}
          className="w-14 h-auto hover:scale-110 transform transition-all duration-300"
        />
      </Link>
    </div>
  );
};

export default Home;
