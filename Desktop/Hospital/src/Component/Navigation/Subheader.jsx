

import Image from 'next/image'
import logo from '/public/image 1.png'
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Subheader = () => {
  return (
    <>
    <main>
<div className=' bg-white flex '>
    <div>    
        <Image className='w-36 h-20 object-contain px-2 py-2' src={logo} alt='logo' width={400} height={400}/>
    </div>
<div className='flex gap-24'>
    <div className='grid py-3'>
        <p className='text-red-900 text-sm font-bold'>Affiliated TO Kathmandu University</p>
        <h1 className='text-xl  font-semibold text-blue-700 -pt-9'>DEVDAHA MEDICAL COLLEGE  </h1>
        <p className='text-sm px-12  font-semibold text-blue-700'>& Research Institute PVT.LTD </p>
    </div>
<div className='flex gap-8'>
    <div className='py-5 flex gap-3'>
        <CiMail className='text-pink-400 bg-slate-300 rounded-full w-9 h-9 px-2 py-2 '/>
        <div className='grid'>
        <h3 className='text-black text-sm'>Email</h3>
        <p className='text-black text-sm font-serif'>pratik2061@gmail.com</p>
        </div>
        </div>
<div className='py-5 flex gap-3'>
<IoCallOutline className='text-pink-400 bg-slate-300 rounded-full w-9 h-9 px-2 py-2' />
<div className='grid'>
        <h3 className='text-black text-sm'>Call Us</h3>
        <p className='text-black text-sm font-serif'>9845455112</p>
        </div>
</div>
<div className='py-5 flex gap-3'>
< CiLocationOn className='text-pink-400 bg-slate-300 rounded-full w-9 h-9 px-2 py-2' />
<div className='grid'>
        <h3 className='text-black text-sm'>Locate Us</h3>
        <p className='text-black text-sm font-serif'>Bhaluhi,Rupandekhi,Nepal</p>
        </div>
<div className='px-8 py-1'>
        <button className="w-32 px-2 py-2 rounded-md  bg-red-800">
            Apply Now
          </button>
          </div>
</div>
    
    </div>
</div>
</div>
 
    </main>
    </>
  )
}

export default Subheader