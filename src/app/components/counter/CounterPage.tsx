import CountdownTimer from "./CountdownTime";
import ProductCard from "../ProductCard";

export default function CounterPage() {
  return (
    <div className="container mx-auto space-y-6 w-full scale-90">
      <div className="border-2 border-secondary rounded-3xl p-4 px-16  flex justify-between items-center bg-[#F6F6F6] h-fit">
        <div className="space-y-4">
          <div className="">
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
          image="images/topi.png"
          bgColor="bg-secondary"
        />
        <ProductCard
          title="White Prakash tea"
          subtitle="Feel the taste of Nepal"
          image="/images/tea.png"
          bgColor="bg-primary"
        />
      </div>
    </div>
  );
}
