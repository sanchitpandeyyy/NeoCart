'use client'
import Image from 'next/image'
import React from 'react'
import image from '/public/mypic.png'
import { TypeAnimation } from 'react-type-animation'
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="bg-gray-200 flex justify-center items-center py-10">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row lg:justify-between items-center gap-8">
          
          {/* Text and Animation Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="flex flex-col gap-3 text-3xl md:text-4xl lg:text-6xl font-semibold">
              <span>Hi</span>
              <span>I am</span>
              Pratik Aryal
            </p>
            
            <div className="flex flex-col items-center lg:items-start gap-5 mt-4">
              {/* Setting a min-width on the TypeAnimation wrapper to avoid layout shifts */}
              <div style={{ minWidth: '300px', textAlign: 'center' }}>
                <TypeAnimation
                  sequence={[
                    'I am a Front-End Developer',
                    1000,
                    'I am a UI/UX Designer',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '3em', display: 'inline-block', color: "red" }}
                  repeat={Infinity}
                />
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-4">
                <FaFacebook className="p-3 w-12 h-12 bg-black rounded-full text-white hover:scale-105 transition-all" />
                <FaTwitter className="p-3 w-12 h-12 bg-black rounded-full text-white hover:scale-105 transition-all" />
                <FaLinkedin className="p-3 w-12 h-12 bg-black rounded-full text-white hover:scale-105 transition-all" />
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="mt-6 lg:mt-0 lg:justify-end lg:flex">
            <Image
              src={image}
              alt="my image"
              width={300}
              height={300}
              className="rounded-md md:w-80 md:h-80 lg:w-96 lg:h-96"
              priority
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
