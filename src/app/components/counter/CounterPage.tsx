import CountdownTimer from "./CountdownTime";
import ProductCard from "../ProductCard";

export default function CounterPage() {
  return (
    <div className="container mx-auto space-y-6 w-full scale-90">
      <div className="border-2 border-blue-400 rounded-3xl p-4  flex justify-between items-center bg-white h-fit">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">
              <span className="text-red-600">दशैं</span> तिहार अफर
            </h2>
            <p className="text-2xl font-bold mt-1">Wine sales starting from</p>
          </div>
          <CountdownTimer />
        </div>
        <div className=" h-40 relative">
          <img
            src="/images/wine.png"
            alt="Wine Bottle"
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <ProductCard
          title="Palpali Dhaka topi"
          subtitle="Symbol of Nepali Braveness"
          image="images/neocart.png"
          bgColor="bg-blue-600"
        />
        <ProductCard
          title="White Prakash tea"
          subtitle="Feel the taste of Nepal"
          image="/placeholder.svg?height=200&width=200"
          bgColor="bg-red-500"
        />
      </div>
    </div>
  );
}
