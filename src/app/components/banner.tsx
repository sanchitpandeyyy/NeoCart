import { Button } from "@/components/ui/button";
import Image from "next/image";
import CounterPage from "./counter/CounterPage";

export default function Banner() {
  return (
    <div className="  my-6 gap-4 flex flex-col lg:flex-row">
      <div className="rounded-2xl p-4 flex justify-center">
        <Image
          src="/images/rect.png"
          alt="Banner"
          width={900}
          height={900}
          className="w-full lg:h-[400px] lg:w-[700px] object-cover rounded-xl"
        />
      </div>
      <div className=" w-[700px] ">
        <CounterPage />
      </div>
    </div>
  );
}
