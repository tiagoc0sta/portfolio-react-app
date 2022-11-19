import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className=" w-full h-screen bg-[#0a192f]">
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#129E57]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Tiago Costa</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer,</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I am specializing in building and design exceptional digital experiences. Currently, I am focused on building responsive web applications.</p>
        <div>
          <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#129E57] rounded-md'>View Work <HiArrowNarrowRight className='ml-3'/></button>
        </div>

      </div>
    </div>
  )
}

export default Home