//shortcut = rafce

import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail, MiOutLineMails} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

import Logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav) //set nav to oposite value

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div >
        <img src={Logo} alt="Logo Image" style={{width: '180px'}}/>
      </div>
      
      {/*menu*/}
        <ul className=" hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
    
      {/*Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        <FaBars/>
        {!nav ? <faBars/> : <FaTimes/>}

      </div>

      {/*Mobile Menu -  check if oposite of false (true) , set style to hidden. Senão  set style to absolute top...*/}   
      <ul className={!nav ?  'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6'>Home</li>
          <li className='py-6'>About</li>
          <li className='py-6'>Skills</li>
          <li className='py-6'>Work</li>
          <li className='py-6'>Contact</li>
      </ul>

      {/*Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' 
              href="https://www.linkedin.com/in/tiago-costa-2998894a/" target="_blank" rel="noopener noreferrer">
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#33333]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
              href="https://github.com/tiagoc0sta" target="_blank" rel="noopener noreferrer">
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#129E57]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
              href="https://github.com/tiagoc0sta" target="_blank" rel="noopener noreferrer">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
              href="https://www.linkedin.com/in/tiago-costa-2998894a/">
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar

//