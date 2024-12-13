import { Button } from "@/components/ui/button";
import Image from "next/image";
import CounterPage from "./counter/CounterPage";

export default function Banner() {
  return (
    <div className="  my-6 gap-4 flex flex-col lg:flex-row">
      <div className="rounded-2xl">
        <Image
          src="/images/rect.png"
          alt="Banner"
          width={400}
          height={400}
          className="w-full lg:h-[400px] lg:w-[700px]  pl-4  object-cover"
        />
      </div>
      <div className=" w-[700px] h-[300px] lg:h-[200px]">
        <CounterPage />
      </div>
    </div>
  );
}
