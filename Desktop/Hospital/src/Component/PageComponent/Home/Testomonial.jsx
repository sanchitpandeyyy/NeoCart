import React from 'react'
import Image from 'next/image'
import image from '/public/Ellipse 81.png'
import image2 from '/public/Ellipse 81-2.png'
import image3 from '/public/Ellipse 81-3.png'

const Testomonial = () => {
  return (
  <>
  <main className='bg-[#F3F3F3]'>
    <div className='w-11/12 mx-auto py-10 flex gap-32'>
    <div className='grid gap-2 py-5'>
        <p className='text-secondary'>Testimonials</p>
        <div className='flex flex-col gap-8'>
        <h1 className='text-black font-semibold text-xl w-60'>What Our Students Say About us</h1>
        <p className='text-gray-400 w-[450px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
    </div>
    <div className='flex flex-col gap-6'>
        <div className='flex gap-5 text-black '>
        <p>Regular</p>
        <p>Facebook</p>
        <p>Google</p>
        </div>
        <div className='grid gap-4 '>
            <div className='border-[1px] border-black px-4 py-2 h-fit flex gap-3 bg-white'>   
                

                         <div className='flex text-black gap-4'>
                         <div className='w-[3px] h-18 bg-black'></div>
                            <Image src={image} alt='testimonialimg1' width={50} height={100} className='w-18 py-4 h-16  rounded-full'/>
                            <div className='flex flex-col gap-2'>
                            <h2 className='font-semibold'>Prateek Aryal</h2>
                            <p className='text-gray-400 w-[600px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  ex ea commodo consequat. </p>
                         </div>
                         </div>

                         

                         
            </div>
            <div className='border-[1px] border-black px-4 py-2 h-fit flex gap-3 bg-white'>   
                
                <div className='w-[5px] h-18 bg-secondary  '></div>

                <div className='flex text-black gap-4'>
                   <Image src={image2} alt='testimonialimg2' width={100} height={100} className='w-20 py-4 h-16  rounded-full'/>
                   <div className='flex flex-col gap-2'>
                   <h2 className='font-semibold'>Prateek Aryal</h2>
                   <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  ex ea commodo consequat. </p>
                </div>
                </div>

                

                
   </div>
   <div className='border-[1px] border-black px-4 py-2 h-fit flex gap-3 bg-white'>   
                
                <div className='w-[5px] h-18 bg-black '></div>

                <div className='flex text-black gap-4'>
                   <Image src={image3} alt='testimonialimg3 ' width={50} height={100} className='w-20 py-4 h-16  rounded-full'/>
                   <div className='flex flex-col gap-2'>
                   <h2 className='font-semibold'>Prateek Aryal</h2>
                   <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  ex ea commodo consequat. </p>
                </div>
                </div>

                

                
   </div>

         

   

        </div>
    </div>
    </div>
  </main>
  </>
  )
}

export default Testomonial