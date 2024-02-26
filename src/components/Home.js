import React from 'react'
import flag from '../assets/USflag1.jpg'
import veteran from '../assets/veterans.jpg'
import veteran2 from '../assets/veterans2.jpg'
import {FaStar} from 'react-icons/fa'

const Home = () => {
  return (
    <div className='pt-[80px]'>
      <div className='bg-[#00A4EF] inset-0 absolute bg-cover bg-no-repeat bg-center'
      style={{
        backgroundImage: `url(${flag})`,
        width: '100%',
        height: 'calc(100vh + 24%)',
        zIndex: -1,
      }}
      >
        <div className='absolute inset-0 bg-[#00102E] opacity-90 transition-all duration-300'></div>
      </div>
      <div className='max-w-[665px] mx-auto px-8 pt-48 pb-36 flex flex-col justify-center items-center relative z-20'>
        <h1 className='text-white text-4xl lg:text-6xl font-bold text-center'>Social exchange to invigorate American values</h1>
        <p className='text-white text-lg pt-10'>Amor Patriae 1776</p>
        <div className='flex justify-between pt-10'>
          <a href="/about" className='text-white px-8 py-4 mr-6 border-2 border-white buttons'>ABOUT US</a>
          <a href="/mission" className='text-white px-8 py-4 border-2 buttons'>WHAT WE DO</a>
        </div>
      </div>
      <div className='flex max-w-[1100px] mx-auto items-center justify-center pb-96 pt-48 lg:pb-0 lg:pt-0'>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center h-[300px]">
          <div className='bg-white text-black p-8 shadow-md shadow-[#040c16] hover:scale-110 duration-500 z-20'>
            <div className='flex justify-center items-center h-12 w-12 bg-red-500 rounded-full'>
              <FaStar size={20} color='white' />
            </div>
            <p className='py-4'>OUR HISTORY</p>
            <p>Since 2012, we've been developing programs and initiatives that bring closer working relationships with local elected community members and stakeholders.</p>
          </div>
          <div className='bg-white text-black p-8 shadow-md shadow-[#040c16] hover:scale-110 duration-500 z-20'>
            <div className='flex justify-center items-center h-12 w-12 bg-red-500 rounded-full'>
              <FaStar size={20} color='white' />
            </div>
            <p className='py-4'>OUR MISSION</p>
            <p>To unite, assist and bring many communities closer and listen to each other’s ideas and brainstorm solutions that will impact their concerns and beliefs.</p>
          </div>
          <div className='bg-white text-black p-8 shadow-md shadow-[#040c16] hover:scale-110 duration-500 z-20'>
            <div className='flex justify-center items-center h-12 w-12 bg-red-500 rounded-full'>
              <FaStar size={20} color='white' />
            </div>
            <p className='py-4'>OUR TEAM</p>
            <p>We're led by Americans who've been blessed by this place. We're committed to giving back in gratitude for our history and the promise of leaving it better than we found it.</p>
          </div>
        </div>
        </div>
        <div className='pt-48 flex flex-col-reverse lg:flex-row justify-center items-center lg:space-x-20'>
          <div className='flex-col max-w-[550px] text-center lg:text-left px-4 lg:px-0'>
            <p className='text-gray-500 text-xs py-4'>AP76.ORG</p>
            <h1 className='text-5xl pb-10 drop-shadow-sm'>America United</h1>
            <p className='text-lg pb-12'>Bridge like-minded non-profit and other organizations for action and impact.</p>
            <a href="/mission" className='hover:text-white px-8 py-4 text-[#791414] border-2 border-[#791414] hover:bg-[#791414]'>LEARN MORE</a>
          </div>
          <div>
            <img className="w-[459px] h-auto" src={veteran} alt="veteran"/>
          </div>
        </div>
        <div className='py-20 flex flex-col lg:flex-row justify-center items-center lg:space-x-20'>
          <div>
            <img className="w-[459px] h-auto" src={veteran2} alt="veteran2"/>
          </div>
          <div className='flex-col max-w-[550px] text-center lg:text-left px-4 lg:px-0'>
            <p className='text-gray-500 text-xs py-4'>AP76.ORG</p>
            <h1 className='text-5xl pb-10 drop-shadow-sm'>Gratitude & Service</h1>
            <p className='text-lg pb-12'>We love America and will continue to give back in gratitude and service.</p>
            <a href="/mission" className='hover:text-white px-8 py-4 text-[#791414] border-2 border-[#791414] hover:bg-[#791414]'>LEARN MORE</a>
          </div>
        </div>
        <div className='bg-[#791414] w-full h-60 flex flex-col lg:flex-row items-center justify-center py-20'>
            <h1 className='text-4xl lg:text-5xl text-white pb-8 lg:pb-0 lg:mr-20'>Have a Question?</h1>
            <a href="/contact" className='text-white px-8 py-4 hover:text-black border-2 border-white hover:bg-white'>CONTACT US</a>
        </div>
    </div>
  )
}

export default Home