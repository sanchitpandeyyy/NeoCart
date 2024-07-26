// import Herosection from '@/Component/UI/Herosection'
import React from "react";
import Image from "next/image";

import Herosection from "@/Component/UI/Herosection";
import Homeslider from "@/Component/UI/Homeslider";
import { PiStudent } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { BiAward } from "react-icons/bi";
// import { RiMicroscopeLine } from "react-icons/ri";
// import { LiaMicroscopeSolid } from "react-icons/lia";
// import { GiGrassMushroom } from "react-icons/gi";
// import { FaArrowRightLong } from "react-icons/fa6";
// import Image1 from "/public/Rectangle 242.png";
// import Image2 from "/public/Rectangle 239.png";
// import Image3 from "/public/Rectangle 233.png";
// import Image4 from "/public/Rectangle 234.png";
import images1 from "/public/Rectangle 17.png";
import images2 from "/public/Rectangle 18.png";
import images3 from "/public/Rectangle19.png";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import image8 from "/public/image 8.png";
import image9 from "/public/image 9.png";
import image6 from "/public/image 6.png";
import image5 from "/public/image 5.png";
import image7 from "/public/image 7.png";
import OverView from "@/Component/PageComponent/Home/OverView";
import AdmissionRequirement from "@/Component/PageComponent/Home/AdmissionRequirement";
import Latest from "@/Component/PageComponent/Home/Latest";
import Facility from "@/Component/PageComponent/Home/Facility";
import Testomonial from "@/Component/PageComponent/Home/Testomonial";

const data = [
  {
    icon: <PiStudent />,
    num: "70+",
    para: "Success Stories",
  },
  {
    icon: <LiaChalkboardTeacherSolid />,
    num: "2000+",
    para: "Teachers",
  },
  {
    icon: <PiStudent />,
    num: "2000+",
    para: "Students",
  },
  {
    icon: <BiAward />,
    num: "2000+",
    para: "Awards",
  },
];

const main = [
  {
    img: images1,
    program: "MBBS PROGRAM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu",
  },
  {
    img: images2,
    program: "MBBS PROGRAM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu",
  },
  {
    img: images3,
    program: "MBBS PROGRAM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu",
  },
];

// import Herosection from "/Component/UI/Herosection";

const page = () => {
  return (
    <>
      <main className="w-full flex flex-col gap-24 bg-white">
          {/* <Herosection title={"Home"} links={"Home"} /> */}

          

   <div>
   <Herosection />
   <Homeslider />
   </div>

          <div className="grid grid-cols-4 bg-white w-9/12 mx-auto px-3 py-3 gap-6 mt-5 ">
            {data.map((val, i) => {
              return (
                <div
                  className="grid gap-3 px-4 py-4 border-2 border-gray-100 font }"
                  key={i}
                >
                  <p className="text-black text-2xl flex items-center justify-center">
                    {val.icon}
                  </p>
                  <p className="text-blue-600 text-xl flex justify-center">
                    {val.num}
                  </p>
                  <p className="text-black text-xl font-semibold flex justify-center ">
                    {val.para}
                  </p>
                </div>
              );
            })}
          </div>
          <OverView />
          <div className="grid gap-10">
       <div className="flex justify-center">
        <h1 className="text-xl font-semibold text-[#184ECF]">MAIN PROGRAM</h1>
       </div>
          <div className="grid grid-cols-3 w-10/12 mx-auto bg-white gap-5 ">
            {main.map((val, i) => {
              return (
                <div
                  className=" grid gap-4  border-2 border-gray-200 px-4 py-4 rounded-md"
                  key={i}
                >
                  <div className="overflow-clip">
                  <Image src={val.img} width={3000} height={1000} alt="name " className="hover:scale-125 duration-500 delay-100 ease-in-out " />
                  </div>
                  <div className="text-black font-semibold">{val.program}</div>
                  <div className="text-sm text-gray-700">{val.description}</div>
                  <div className="flex justify-between">
                    <div className="flex py-4">
                      <p className="text-black cursor-pointer hover:text-mainColor duration-200 delay-50 ease-in-out ">Explore</p>
                      <LiaLongArrowAltRightSolid className="text-xl text-black h-7 " />
                    </div>
                    <div>
                      <button className="bg-[#184ECF] text-white text-sm px-2 py-3 w-32  ">
                        Get Admission
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>

          <div className=" grid gap-5  bg-[#F3F3F3] py-8">
            <h1 className="text-[#184ECF] font-semibold flex justify-center text-xl">
              {" "}
              STUDENT LIFE{" "}
            </h1>
            <div className="flex justify-center">
              <button className="bg-white  text-black border-2 text-sm px-4 py-3 w-44 hover:bg-[#B71B1B] hover:text-white  ">
                Student Life
              </button>
              <button className="bg-white text-black border-2 px-4 py-3 w-44 hover:bg-[#B71B1B] hover:text-white ">
                Traning
              </button>
              <button className="bg-[] text-black text-sm border-2 px-4 py-3 w-44 hover:bg-[#B71B1B] hover:text-white ">
                Hostel Life
              </button>
            </div>
            <div className="w-10/12 mx-auto grid gap-3">
            <div className="flex gap-3 ">
              <Image
                src={image8}
                alt="program first image"
                width={600}
                height={200}
                className="object-cover"
              />
              <Image
                src={image9}
                alt="program first image"
                width={600}
                height={200}
                className="object-cover"
              />
            </div>
            <div className="flex gap-3">
              <Image
                src={image6}
                alt="program first image"
                width={300}
                height={200}
                className="object-cover"
              />
              <Image
                src={image5}
                alt="program first image"
                width={600}
                height={200}
                className="object-cover"
              />
              <Image
                src={image7}
                alt="program first image"
                width={300}
                height={200}
                className="object-cover"
              />
            </div>
            </div>
          </div>
          <AdmissionRequirement />
         <Latest/>
         <Facility/>
         <Testomonial/>
         
         
      </main>
    </>
  );
};

export default page;
