import React from 'react';
import weatherImg from '../assets/weather.png';
import BeachesImg from '../assets/beaches.png';
import airtravelImg from '../assets/airtravel.png';
import weekawayImg from '../assets/weekaway.png';
import driveImg from '../assets/drive.png';
import bestEatsImg from '../assets/bestEats.png';
import boostImg from '../assets/boost.png';
import photographyImg from '../assets/photography.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#129E57]'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/*Container*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${weatherImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white trackin-wider'>
                Weather API - React JS
              </span>
              <div className='pt-8'>
                <a
                  href='https://roaring-rabanadas-590164.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/tiagoc0sta/weather-app-react.git'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${BeachesImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white trackin-wider'>
                BEACHES. - ReactJS
              </span>
              <div className='pt-8'>
                <a
                  href='https://resilient-pavlova-744626.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/tiagoc0sta/travel-react-tailwind'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${airtravelImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white trackin-wider'>
                AirTravel - React JS
              </span>
              <div className='pt-8'>
                <a
                  href='https://funny-sundae-804e00.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/tiagoc0sta/6_Airtravel_JS-HTML-CSS_CodecomMerce_YT'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${weekawayImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white trackin-wider'>
                WeekAWay - React JS
              </span>
              <div className='pt-8'>
                <a
                  href='https://lively-begonia-50e989.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/tiagoc0sta/trip'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${driveImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white trackin-wider'>
                Drive - React JS
              </span>
              <div className='pt-8'>
                <a
                  href='https://dapper-beijinho-e2b911.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/tiagoc0sta/drive'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${bestEatsImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white trackin-wider'>
                BestEats - React JS
              </span>
              <div className='pt-8'>
                <a
                  href='https://quiet-faloodeh-f2ebf8.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/tiagoc0sta/best-eats'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${photographyImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white trackin-wider'>
                Photography - ReactJS
              </span>
              <div className='pt-8'>
                <a
                  href='https://rad-blancmange-7b05fa.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/tiagoc0sta/captur-photography'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${boostImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white trackin-wider'>
                Boost game - Unity
              </span>
              <div className='pt-8'>
                <a
                  href='https://sharemygame.com/@tiagoc0sta/rocket-in-mars'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/tiagoc0sta/ProjectBoost_Unity3D.git'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
