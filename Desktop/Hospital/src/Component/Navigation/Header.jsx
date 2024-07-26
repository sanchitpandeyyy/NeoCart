import Link from 'next/link'
import React from 'react'
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <div className='flex gap-4 px-4 py-4 bg-blue-800 justify-between text-sm font-semibold'>
        <ul>
            <li>
                <Link href="/">HOME</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href="aboutus">ABOUT US</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href="academic">ACADEMIC</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href="department">DEPARTMENT</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href="publication">PUBLICATION</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href="studentresources">STUDENT RESOURCES</Link>
            </li>
        </ul>

        <ul>
            <li>
                <Link href="news">NEWS & EVENT</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href="contact">CONTACT</Link>
            </li>
        </ul>
        <div className='flex gap-3 text-2xl  text-pink-600'>
<CiFacebook className='bg-white rounded-full  p-1'/>
<CiInstagram className='bg-white rounded-full  p-1'/>
<CiTwitter className='bg-white rounded-full p-1'/>
<CiYoutube className='bg-white rounded-full p-1'/>
<FaWhatsapp className='bg-white rounded-full  p-1'/>

        </div>
        <div className='-mt-1'>
<button className="w-50 px-4 py-2 rounded-md  bg-gray-800">
            Make a Appointment
          </button>
</div>
    </div>
    </>
  )
}

export default Header