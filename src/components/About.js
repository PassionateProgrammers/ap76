import React from 'react';
import Statue from '../assets/statue-of-liberty.jpg';
import Flags from '../assets/u-s.jpg';
import Brenden from '../assets/Brenden.jpeg';
import Satish from '../assets/Satish.jpeg';
import { FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <div className='pt-[80px]'>
      <div className='bg-[#00A4EF] inset-0 absolute bg-cover bg-no-repeat bg-center'
      style={{
        backgroundImage: `url(${Statue})`,
        width: '100%',
        height: '100vh',
        zIndex: -1,
      }}
      >
        <div className='absolute inset-0 bg-[#00102E] opacity-90 transition-all duration-300'></div>
      </div>
      <div className='max-w-[665px] mx-auto px-8 pt-20 pb-36 flex flex-col justify-center items-center relative z-20'>
      <h1 className='text-white text-center text-4xl pt-28 inline border-b-4 border-white'>About Us</h1>
        <h1 className='text-white text-4xl lg:text-6xl font-bold text-center pt-8'>We love America</h1>
        <p className='text-white text-lg pt-10'>We're led by Americans who've been blessed by this place. We're committed to giving back in gratitude for our history and the promise of leaving it better than we found it.</p>
      </div>
        <div className='px-8 lg:px-0 pt-36 lg:pt-48 pb-12 lg:pb-20 flex flex-col lg:flex-row justify-center items-center lg:space-x-20'>
          <div>
            <img className="w-[600px] h-auto" src={Flags} alt="usflags"/>
          </div>
          <div className='flex-col max-w-[550px] text-center lg:text-left py-8 lg:py-0'>
            <h1 className='text-5xl pb-4 drop-shadow-sm'>What We Do</h1>
            <p className='py-4 font-bold'>01</p>
            <p>Since 2012, we have been developing programs and initiatives that bring closer working relationships with local elected leaders, community member, and stakeholders.</p>
            <p className='py-4 font-bold'>02</p>
            <p>Encourage accountability, transparency, and ethical standards for elected officials and politicians.</p>
            <p className='py-4 font-bold'>03</p>
            <p>Provide a platform for exchange of ideas on freedom and prosperity for all.</p>
          </div>
        </div>
        <div className='bg-[#791414] w-full h-60 flex flex-col lg:flex-row items-center justify-center py-20'>
            <h1 className='text-4xl lg:text-5xl text-white pb-8 lg:pb-0 lg:mr-20'>Have a Question?</h1>
            <a href="/ap76/#/contact" className='text-white px-8 py-4 hover:text-black border-2 border-white hover:bg-white'>CONTACT US</a>
        </div>
      <div className='max-w-[1100px] mx-auto py-10 lg:py-20 px-8 lg:px-0'>
        <p className='text-gray-500 text-xs pb-4'>ABOUT US</p>
        <h1 className='text-center lg:text-left text-5xl pb-4 drop-shadow-sm'>Meet Our Team</h1>
        <p className='text-center lg:text-left pb-8'>Leadership</p>
        <div className='flex flex-col md:flex-row space-x-0 md:space-x-8 justify-center items-center'>
        <div className='w-full lg:w-[50%]'>
          <div className="image-container pb-4">
            <img className="rounded-full w-32 h-32 border-white border-4" src={Satish} alt="Satish_Mysore" />
          </div>
          <p className='text-[#791414] pb-4'>SATISH MYSORE</p>
          <div className='h-64 lg:h-auto pb-0 lg:pb-4'>
          <p>A seasoned Chief Executive Officer with a demonstrated history of building value through to liquidity events with several privately held companies. He is skilled in Product Design, Engineering, Computer-Aided Design, and SolidWorks, as well as the economic and political states of numerous countries. He has been married for 28 years, has a grown son, and earned a Master of Science in Industrial Engineering degree from the University of New Hampshire. Satish immigrated to the United States in 1988.</p>
          </div>
          <a href="https://www.linkedin.com/in/satish-mysore-58228a/" target="_blank" rel="noopener noreferrer" className='text-gray-500'><FaLinkedin size={30}/></a>
        </div>
        <div className='w-full lg:w-[50%] pt-8 md:pt-0'>
          <div className="image-container pt-8 pb-4">
            <img className="rounded-full w-32 h-32 border-white border-4" src={Brenden} alt="Brenden_Connelly" />
          </div>
          <p className='text-[#791414] pb-4'>BRENDAN CONNELLY</p>
          <div className='h-72 lg:h-auto pb-0 lg:pb-4'>
          <p>Fifteen years of experience as Vice President, wealth advisor and fiduciary with a $4 billion SEC-registered investment advisor. Prior experience includes providing secondary liquidity to private equity and venture capital holdings, as well as hedge fund business development. Currently working in small business succession and acquisition while travelling the country by motor coach with his wife of 30 years. He has three grown children—two adopted—and earned his B.A. in Broadcast Journalism from Central Connecticut State University.</p>
          </div>
          <a href="https://www.linkedin.com/in/brendanconnelly/" target="_blank" rel="noopener noreferrer" className='text-gray-500'><FaLinkedin size={30}/></a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About