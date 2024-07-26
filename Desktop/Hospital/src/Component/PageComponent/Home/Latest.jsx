'use client'
import React from 'react'
import image1 from "/public/Rectangle 250.png"
import image2 from "/public/Rectangle 256.png"
import Image from 'next/image'
import Slider from "react-slick";
const data=[
    {
        image:image1,
        date:"14 July 2024",
        title:"Our Latest Events&news",
        para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut co laboris nisi ut  consequat. "
    },
    {
        image:image2,
        date:"14 July 2024",
        title:"Our Latest Events&news",
        para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut co laboris nisi ut  consequat. "
    },
]

const Latest = () => {

           
  return (
   <>
   <main className='bg-[#b7c8f0] flex flex-col gap-10 py-8'>
   <div className='flex justify-center'> 
<h1 className='text-xl font-semibold text-black'>Latest Events&news</h1>
</div>

<div className=' grid grid-cols-2 w-10/12 mx-auto gap-10'>

{
    data.map((val,i)=>{
        
        return(
            <div className=' flex gap-10 ' key={i}>
                <div className='overflow-clip'>
            <Image src={val.image} alt='latest news images' width={200} height={200} className='object-cover w-[800px] h-48 hover:scale-125 transition-all delay-100 duration-500 ease-in-out'/>
            </div>
            <div className='py-3'>
                <p className='text-gray-500 text-md'>{val.date}</p>
                <div className='grid gap-7'>
                <p className='text-[#0e2f7c]'>{val.title}</p>
                <p className='text-gray-500 text-sm'>{val.para}</p>
                </div>
                </div>
                
            </div>
        )
       
        
    })
}

</div>


    
   </main>
   </>
  )
}

export default Latest