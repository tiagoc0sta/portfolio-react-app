//shortcut = rafce

import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll'
import {animateScroll as scroll} from 'react-scroll'

import Logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav) //set nav to oposite value

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div >
        <img className='cursor-pointer' src={Logo} alt="Logo" style={{width: '180px'}} 
          onClick={()=> scroll.scrollToTop()}/>
      </div>
      
      {/*menu*/}
        <ul className=" hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
            </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
    
      {/*Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        <FaBars/>
        {!nav ? <faBars/> : <FaTimes/>}

      </div>

      {/*Mobile Menu -  check if oposite of false (true) , set style to hidden. Senão  set style to absolute top...*/}   
      <ul className={
        !nav 
          ?  'hidden' 
          : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
          <li className='py-6 text-4xl'>
             <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>            
          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link></li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link></li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contact
            </Link></li>
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
              href="mailto:tiagodpv@gmail.com" target="_blank" rel="noopener noreferrer">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
              href="https://drive.google.com/file/d/1HfSKFCNG8UsH7-kT9dcj2gNUEvjab-QQ/view?usp=share_link" target="_blank" rel="noopener noreferrer">
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