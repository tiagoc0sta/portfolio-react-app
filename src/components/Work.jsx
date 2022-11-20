import React from 'react'
import weatherImg from '../assets/weather.png';
import todoImg from '../assets/todo.png';
import feedImg from '../assets/feed.png';
import timerImg from '../assets/timer.png';
import loginImg from '../assets/login.png';
import blogImg from '../assets/blog.png';
import boostImg from '../assets/boost.png';
import menuImg from '../assets/menu.png';
import dtmoneyImg from '../assets/dtmoney.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        {/*Container*/}
        <div  className='grid sm:grid-cols-2 md:grid-cols-4 gap-4' >

          {/*Grid Item*/}
          <div style={{backgroundImage: `url(${weatherImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white trackin-wider'>
                Weather API - React JS  
              </span>
              <div className='pt-8'>
                <a href="https://roaring-rabanadas-590164.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/tiagoc0sta/weather-app-react.git" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>

          {/*Grid Item*/}
          <div style={{backgroundImage: `url(${todoImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white trackin-wider'>
                To do list - React JS 
              </span>
              <div className='pt-8'>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>

          {/*Grid Item*/}
          <div style={{backgroundImage: `url(${feedImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white trackin-wider'>
                Feed list  - React JS 
              </span>
              <div className='pt-8'>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>

          {/*Grid Item*/}
          <div style={{backgroundImage: `url(${timerImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white trackin-wider'>
                Timer - React JS 
              </span>
              <div className='pt-8'>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>

          {/*Grid Item*/}
          <div style={{backgroundImage: `url(${loginImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white trackin-wider'>
                Login screen - React JS 
              </span>
              <div className='pt-8'>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>
          
          {/*Grid Item*/}
          <div style={{backgroundImage: `url(${blogImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white trackin-wider'>
                Blog - React JS 
              </span>
              <div className='pt-8'>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>
          
          {/*Grid Item*/}
          <div style={{backgroundImage: `url(${menuImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white trackin-wider'>
                UI menu - Unity 
              </span>
              <div className='pt-8' >
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>

          {/*Grid Item*/}
          <div style={{backgroundImage: `url(${boostImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white trackin-wider'>
                Boost game - Unity 
              </span>
              <div className='pt-8'>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>

          
                    

        </div>

      </div>
    </div>
  )
}

export default Work