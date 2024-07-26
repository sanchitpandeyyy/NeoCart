import React from 'react'
import logo from '/public/image 1.png'
import Image from 'next/image'
import imagess from '/public/map.png'

const Footer = () => {
  return (
    <div className='bg-[#091C47] h-[400px]'>
        <div className='w-11/12 mx-auto py-16 grid grid-cols-3 gap-14'>
        <div className='flex flex-col gap-6'>
            <div className='flex gap-6'>
    <Image src={logo} alt='logo' width={400} height={400} className='w-24 h-28 object-cover'/>
    <div>
    <h1 className='text-xl font-semibold flex gap-1'><span className='text-mainColor'>Devdhaha</span>Medical Collage</h1>
    
    <p  className='text-sm '>Affiliated To Kathmandu University</p>
    
   
    </div>
</div>
<div>
    <p className='text-gray-400 w-[400px]'>Devdaha medical college, we are dedicated to fostering the next generation of healthcare professionals through a rigorous curriculum, innovative research, and a commitment to community service. </p></div>

        </div>

       
            <div className='flex gap-7'>
                <div className='flex flex-col gap-6 '>
                <h1 className='font-medium'>Quick Links</h1>
                <div className='flex flex-col gap-3 text-sm'>
                <p>ADMISSION</p>
                <p>DEPARTMENT</p>
                <p>RESEARCH</p>
                <p>CONTACT</p>
                <p>ABOUT</p>
                <p>GALLARY</p>
                </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <h1 className='font-medium'>Important Links</h1>
                    <div className='flex flex-col gap-4 text-sm'>
                    <p>FAQS</p>
                <p>DEPARTMENT</p>
                <p>RESEARCH</p>
                <p>CONTACT</p>
                <p>ABOUT</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <h1 className='font-medium'>RESOURCES</h1>
                    <div className='flex flex-col gap-4 text-sm'>
                    <p>LIBRARY</p>
                <p>ACADEMIC SERVICE</p>
                <p>CARRER SERVICE </p>
                <p>ALUMNI</p>
                <p>CAMPUS FACILITIES</p>
                    </div>
                </div>
            </div>
        
        <div>
            <Image src={imagess} alt='map' width={200} height={200} className='w-[600px] h-60 object-contain'/>
        </div>
        </div>

    
    </div>
  )
}

export default Footer