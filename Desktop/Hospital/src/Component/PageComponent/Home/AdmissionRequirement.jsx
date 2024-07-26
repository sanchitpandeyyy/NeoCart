import React from 'react'
import { FaUserNurse } from "react-icons/fa";
import { PiGreaterThanLight } from "react-icons/pi";
const data=[
  {
icon:<FaUserNurse />,
title:"Pcl Nursing"
},
{
  icon:<FaUserNurse />,
  title:"Pcl Nursing"
  },
  {
    icon:<FaUserNurse />,
    title:"Pcl Nursing"
    },
    {
      icon:<FaUserNurse />,
      title:"Pcl Nursing"
      },
      {
        icon:<FaUserNurse />,
        title:"Pcl Nursing"
        },
        {
          icon:<FaUserNurse />,
          title:"Pcl Nursing"
          },
          {
            icon:<FaUserNurse />,
            title:"Pcl Nursing"
            },
            {
              icon:<FaUserNurse />,
              title:"Pcl Nursing"
              },
]

const AdmissionRequirement = () => {
  return (
    <>
    <main className='flex flex-col gap-8 w-10/12 mx-auto'>
        <div className='flex justify-center'>
            <h1 className='text-secondary text-2xl font-semibold '>Admission Requirement</h1>
        </div>
        {/* <div className='flex justify-between'> */}
          {/* <div className='w-full h-fit px-5 py-4 flex gap-3 bg-[#EFEBEB]'>
            <p className='text-gray-400'><FaUserNurse/></p>
            <p className='text-black text-md '>Pcl Nursing</p>
          </div> */}
          <div className='grid grid-cols-2 gap-10'>
            {
              data.map((val,i)=>{
                return(
                  <div className=" flex justify-between   bg-[#EFEBEB] px-4 py-2" key={i}>
                    <div className='flex gap-3'>
                    <p className='text-gray-400 text-xl'>{val.icon}</p>
                    <p  className='text-black text-lg'>{val.title}</p>
                    </div>
                    <div>
            <button className='flex gap-2 w-fit px-8 bg-[#e8edfa] py-1 text-secondary text-sm hover:bg-secondary duration-500 delay-100 ease-in-out  hover:text-white'>Explore<span><PiGreaterThanLight/></span></button>
          </div>

                  </div>
                )
              })
            }
          </div>
         
        {/* </div> */}
    </main>
    
    </>
  )
}

export default AdmissionRequirement