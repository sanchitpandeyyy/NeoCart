"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import hero from "/public/herosectionimg.jpg.png";
import { FaViber } from "react-icons/fa";
function Herosection() {
  const [Blink, setBlink] = useState(true);

  useEffect(() => {
    let interval;
    interval = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 2000);
    return () => {
      clearTimeout(interval);
    };
  }, [Blink]);

  return (
    <div className="w-full h-lvh relative  bg-white">
      <div className=" h-full">
        <Image
          className="w-full h-full object-cover bg-transparent"
          src={hero}
          alt="herosection "
          width={500}
          height={500}
        />
        <div className="absolute w-full top-0 bg-black bg-opacity-30 h-full"></div>
      </div>
      <div className="absolute top-0 mx-auto right-0 bottom-0 justify-center h-full flex gap-10 flex-col w-10/12 left-0  ">
        <h1 className="text-3xl w-5/12 font-semibold">
          <span className="text-blue-600 text-3xl font-semibold pr-2 ">
            LEADERS
          </span>
          IN MEDICAL EDUCATION AND RESEARCH
        </h1>
        <p className="w-6/12 leading-relaxed text-md font-medium">
          A Devdaha medical college is an institution dedicated to the education
          and training of future healthcare professionals, including doctors,
          nurses, and specialists.
        </p>
        <div className="flex gap-5">
          <div>
            <button className="w-fit px-6 text-sm py-2.5 rounded-md  bg-red-800">
              Apply Now
            </button>
          </div>
          <div
            className={`flex ${
              Blink ? "text-red-500 scale-100" : "text-blue-500 scale-95"
            } transition-all duration-500 delay-100 ease-in-out  gap-6`}
          >
            <div>
              <FaViber className=" text-3xl" />
            </div>
            <p className="text-lg font-semibold">+91-99337777886</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
