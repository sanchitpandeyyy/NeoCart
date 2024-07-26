import React from 'react'
import { RiMicroscopeLine } from "react-icons/ri";
import { LiaMicroscopeSolid } from "react-icons/lia";
import { GiGrassMushroom } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import Image1 from "/public/Rectangle 242.png";
import Image2 from "/public/Rectangle 239.png";
import Image3 from "/public/Rectangle 233.png";
import Image4 from "/public/Rectangle 234.png";
import Image from 'next/image';
function OverView() {
  return (
    <div className="grid grid-cols-2 w-10/12 mx-auto ">
    <div className="text-black flex flex-col gap-12">
     <div className='flex flex-col gap-4'>
     <h1 className="text-2xl font-bold text-[#184ECF;]">
        Overview Of DMC
      </h1>
      <div className="flex gap-3 items-baseline  ">
        <div className="h-[2px] bg-mainColor w-40"></div>
        <h2 className="text-xl  text-secondary font-semibold">
          ABOUT US
        </h2>
        {/* <p className="text-[#184ECF] font-semibold text-lg ">ABOUT US</p> */}
      </div>
     </div>
      <p className="text-gray-500 text-md">
        At Devdaha medical college, we are dedicated to fostering the
        next generation of healthcare professionals through a rigorous
        curriculum, innovative research, and a commitment to community
        service. At Devdaha medical college, we are dedicated to
        fostering the next generation of healthcare professionals
        through a rigorous
      </p>
      <div className="grid grid-cols-2 gap-4 w-8/12">
          <div className="flex items-center gap-2">
            <RiMicroscopeLine className="text-[#184ECF] text-lg" />
            <p className="text-sm font-medium text-gray-500 ">
              Research Opportunity
            </p>
          </div>
          <div className="flex items-center gap-2">
            <LiaMicroscopeSolid className="text-[#184ECF] text-lg" />
            <p className="text-sm font-medium text-gray-500 ">
              World Class Facility
            </p>
          </div>
          <div className="flex items-center gap-2">
            <GiGrassMushroom className="text-[#184ECF] text-lg" />
            <p className="text-sm font-medium text-gray-500 ">
              Learning Environment
            </p>
          </div>
          <div className="flex items-center gap-2">
            <GiGrassMushroom className="text-[#184ECF] text-lg" />
            <p className="text-sm font-medium text-gray-500 ">
              Advanced Facility
            </p>
          </div>
      </div>
        <button className="bg-secondary  text-white uppercase font-light text-xs px-7 py-3 w-fit items-center flex gap-2">
          See More{" "}
          <span>
            <FaArrowRightLong className="text-xl text-gray-200" />
          </span>
        </button>
    </div>
    <div className="flex gap-4 justify-end py-4">
      <div className="grid gap-3  w-fit h-fit">
        <Image
          src={Image1}
          alt="about img1"
          width={400}
          height={400}
          className="w-52 h-52"
        />
        <Image
          src={Image2}
          alt="about img2"
          width={400}
          height={400}
          className="w-52 h-52 "
        />
      </div>
      <div className="grid gap-3 w-fit h-fit py-8">
        <Image
          src={Image3}
          alt="about img1"
          width={400}
          height={400}
          className="w-52 h-52"
        />
        <Image
          src={Image4}
          alt="about img2"
          width={400}
          height={400}
          className="w-52 h-52 "
        />
      </div>
    </div>
  </div>
  )
}

export default OverView