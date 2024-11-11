import React from 'react'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'

const page = () => {
  return (
  <>
  <div className='flex flex-col gap-10'>

  <Home/>
  <About/>
  </div>
  </>
  )
}

export default page