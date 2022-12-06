import React from 'react'

import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <>
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/9ed5ef20-9dfc-49e0-a5c9-b7668ab26835" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#129E57] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - tiagodpv@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] rounded-md p-2 ' type="text" placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-[#ccd6f6] rounded-md' type="email" placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] p-2 rounded-md'  name='message' rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#129E57] hover:border-[#129E57] px-4 py-3 my-8 mx-auto flex items-center rounded-md'>Let's talk!</button>

        <ul className='flex justify-center mt-10'>

          <li>
            <a className='flex justify-between items-center w-full text-gray-300 hover:scale-150 duration-500' 
              href="https://www.linkedin.com/in/tiago-costa-2998894a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30}/>
            </a>
          </li>
          <li >
          <a className='flex justify-between items-center w-full text-gray-300 hover:scale-150 duration-500' 
            href="https://github.com/tiagoc0sta" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30}/>
          </a>
          </li>
          <li>
          <a className='flex justify-between items-center w-full text-gray-300 hover:scale-150 duration-500' 
            href="mailto:tiagodpv@gmail.com" target="_blank" rel="noopener noreferrer">
             <HiOutlineMail size={30}/>
          </a>          
        </li>
        <li>
            <a className='flex justify-between items-center w-full text-gray-300 hover:scale-150 duration-500' 
              href="https://drive.google.com/file/d/1HfSKFCNG8UsH7-kT9dcj2gNUEvjab-QQ/view?usp=share_link" target="_blank" rel="noopener noreferrer">
              <BsFillPersonLinesFill size={30}/>
            </a>
        </li>
      </ul>
        
      </form>  
    </div>

    

    </>
    

  )
}

export default Contact