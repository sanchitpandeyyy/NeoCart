import React from "react";
// import Marquee from 'react-fast-marquee'
import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";

const Homeslider = () => {
  return (
    <>
      <div className="bg-[#0B235D] h-10 gap-20">
        <Marquee speed={100}>
          <div className="flex gap-20">
            <div className="py-2 flex gap-4">
              <GoDotFill className="text-2xl" />
              <p className="text-lg">Admission Open</p>
            </div>
            <div className="py-2 flex gap-4">
              <GoDotFill className="text-2xl" />
              <p className="text-lg">Admission Open</p>
            </div>
            <div className="py-2 flex gap-4">
              <GoDotFill className="text-2xl" />
              <p className="text-lg">Admission Open</p>
            </div>
            <div className="py-2 flex gap-4">
              <GoDotFill className="text-2xl" />
              <p className="text-lg">Admission Open</p>
            </div>
            <div className="py-2 flex gap-4">
              <GoDotFill className="text-2xl" />
              <p className="text-lg">Admission Open</p>
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Homeslider;
