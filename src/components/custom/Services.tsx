import Image from 'next/image'
import React from 'react'
import { CgDanger } from 'react-icons/cg'
import { GrReturn, GrStatusGood } from 'react-icons/gr'



const Services = () => {
  
const data=[
    {
image:"/images/image 64.png",
    },
    {
        image:"/images/image 65.png",
            },
]

const datas=[
    {
        icon:<GrStatusGood />,
        text:"100% authentic from trusted brand"
    },
    {
        icon:<GrReturn/>,
        text:"14 days of easy return"
    },
    {
        icon:<CgDanger />,
        text:"Warranty not available"
    },
]
  return (
   <>
   <div className='flex flex-col gap-8'>


   <div className='flex flex-col gap-4'>
    <h1>Payment Method</h1>

   {
    data.map((val,i)=>{
        return(
            <div key={i}>
<Image src={val.image} alt='payement' width={400} height={400} className='w-28'/>
            </div>
        )
    })
   }
      </div>

      <div className='flex flex-col gap-3'>
        <h1>
            Services
        </h1>

        <div>
            {
                datas.map((val,i)=>{
                    return(
                        <div key={i} className='flex gap-2 items-center'>
<h1 className='text-blue-400 text-xl'>{val.icon}</h1>
<h1 className='text-md'>{val.text}</h1>
                        </div>
                    )
                })
            }
        </div>
      </div>
      </div>
   </>
  )
}

export default Services