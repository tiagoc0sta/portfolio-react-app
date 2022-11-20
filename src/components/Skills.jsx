//shortcut = rafce
import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Csharp from '../assets/csharp.png';
import Sql from '../assets/sql.png';
import Tailwind from '../assets/tailwind.png';
import Unity from '../assets/unity.png';


const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f] text-gray-300'>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justitfy-center w-full h-full' >
        <div >
          <p className='text-4xl font-bold inline border-b-4 border-[#129E57] '>Skills</p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
            <p className='py-4'>HTML</p>
          </div>  
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS icon"/>
            <p className='py-4'>CSS</p>
          </div> 
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon"/>
            <p className='py-4'>JAVASCRIPT</p>
          </div> 
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="REACT icon"/>
            <p className='py-4'>REACT JS</p>
          </div> 
          
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Csharp} alt="Csharp icon"/>
            <p className='py-4'>C#</p>
          </div> 
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Sql} alt="Sql icon"/>
            <p className='py-4'>SQL</p>
          </div> 
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon"/>
            <p className='py-4'>TAILWIND</p>
          </div>  
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Unity} alt="Unity icon"/>
            <p className='py-4'>UNITY</p>
          </div>        
        </div>
      </div>      
    </div>
  )
}

export default Skills