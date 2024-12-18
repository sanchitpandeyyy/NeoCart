import Image from "next/image";
import CounterPage from "./counter/CounterPage";

export default function HeroLander() {
  return (
    <div className="mb-6 gap-4 flex flex-col lg:flex-row">
      <div className="rounded-2xl p-4 flex justify-center w-full lg:w-[700px]">
        <Image
          src="/images/rect.png"
          alt="Banner"
          width={900}
          height={900}
          className="w-full lg:h-[400px] lg:w-[700px] object-cover rounded-xl"
        />
      </div>
      <div className="w-full lg:w-[700px] mt-4 lg:mt-0">
        <CounterPage />
      </div>
    </div>
  );
}
