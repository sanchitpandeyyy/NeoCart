import React from 'react'
import Image from 'next/image'
import image1 from '/public/Rectangle 220.png'
import image2 from '/public/Rectangle 244.png'
import image3 from '/public/Rectangle 245.png'
import image4 from '/public/Rectangle 246.png'
import { FaArrowRightLong } from "react-icons/fa6";


const data=[
    {
    ims:image1,
    title:"Canteen",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "

},
{
    ims:image2,
    title:"Hostel",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "

},
{
    ims:image3,
    title:"Library",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "

},
{
    ims:image4,
    title:"Health Services",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "

},


]
const Facility = () => {
  return (
   <>
   <main className=' flex flex-col gap-10 w-10/12 mx-auto'>
    <div className='flex justify-center'>
    <h1 className='text-secondary font-bold text-xl'>Our Facilities</h1>
    </div>
    <div className="grid grid-cols-4 gap-5">
{
    data.map((val,i)=>{
        return(
            <div className='flex flex-col gap-3' key={i}>
                <div className='overflow-clip'>
                <Image src={val.ims} alt='faciliy image' width={400} height={400} className='object-cover hover:scale-125 transition-all duration-500 delay-100 ease-in-out'/>
                </div>
                <p className='text-black font-medium flex justify-center'>{val.title}</p>
                <div className='grid gap-8 '>
                <p className='text-md text-gray-500 px-3'>{val.para}</p>
                <div className='px-10 grid gap-4'>
                <div className='w-48  h-[1px] bg-gray-300'></div>
                <button className='flex gap-2 w-fit px-8  border-none  py-1 text-secondary text-sm hover:bg-secondary duration-500 delay-100 ease-in-out  hover:text-white'>Explore<span><FaArrowRightLong className='text-xl' /></span></button>
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

export default Facility