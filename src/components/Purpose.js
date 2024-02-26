import React from 'react';
import { FaStar } from 'react-icons/fa';
import Flag3 from '../assets/flag-3.jpg';
import Rushmore from '../assets/mount-rushmore.jpg';

const Purpose = () => {

  const cardContent = [
    { title: 'Ethical standards', description: 'Description for CardEncourage accountability, transparency, and ethical standards for elected officials and politicians.' },
    { title: 'Free community', description: 'Create free community meal forums for Americans of all means and beliefs to come together and exchange ideas in goodwill.' },
    { title: 'Action and impact', description: 'Bridge like-minded non-profit and other organizations for action and impact.' },
    { title: 'Exchange of ideas', description: 'Provide a platform for exchange of ideas on freedom and prosperity for all.' },
    { title: 'Economic', description: 'Move the needle towards prudent and sane economic and social policy.' },
    { title: 'Social networking', description: 'Promote social networking on community programs.' },
  ];

  return (
    <div>
    <div className='pt-[80px] max-w-[1100px] mx-auto flex flex-col min-h-screen pb-[1300px] md:pb-20 lg:pb-20 px-4 lg:px-0'>
      <div>
        <h1 className='text-center lg:text-left text-4xl md:text-6xl font-bold drop-shadow-sm py-10 lg:py-20'>What We Do</h1>
      </div>
      <div className='h-[650px]'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {/* Cards */}
          {cardContent.map((content, index) => (
            <div key={index} className='bg-white p-8 shadow-md h-72'>
              {/* Card content */}
                <div className='flex justify-center items-center h-12 w-12 bg-red-500 rounded-full'>
                <FaStar size={20} color='white' />
                </div>
                <h2 className='text-lg font-bold py-4'>{content.title}</h2>
                <p className='mt-2 flex-1'>{content.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className='w-full bg-white'>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:space-x-20 p-8 lg:p-0'>
          <div>
            <img className="w-[459px] h-auto" src={Flag3} alt="flag-3"/>
          </div>
          <div className='flex-col max-w-[550px] text-center lg:text-left px-4 lg:px-0'>
            <p className='text-gray-500 text-xs py-4'>AP76.ORG</p>
            <h1 className='text-5xl pb-10 drop-shadow-sm'>Since 2012</h1>
            <p className='text-lg pb-12'>We have been developing programs and initiatives that bring closer working relationships with local elected leaders, community member, and stakeholders.</p>
            <a href="/mission" className='hover:text-white px-8 py-4 text-[#791414] border-2 border-[#791414] hover:bg-[#791414]'>LEARN MORE</a>
          </div>
        </div>
    </div>
    <div className='max-w-[1100px] mx-auto p-8 lg:pt-20'>   
        <p className='text-gray-500 text-xs py-4'>AP76.ORG</p>
        <h1 className='text-2xl lg:text-4xl pb-10 drop-shadow-sm'>Mission Statement: Social exchange to invigorate American values</h1>
    </div>
    <div className='flex flex-col lg:flex-row justify-center items-center pb-28'>
      <div>
        <img className="w-[459px] h-auto" src={Rushmore} alt="mtrushmore"/>
      </div>
    <div className='stars flex flex-col space-y-20 pl-12 pt-12'>
        <div className='flex justify-center items-center h-12 w-12 bg-red-500 rounded-full'>
          <FaStar size={20} color='white' />
        </div>
        <div className='flex justify-center items-center h-12 w-12 bg-red-500 rounded-full'>
          <FaStar size={20} color='white' />
        </div>
    </div>
      <div className='flex flex-col max-w-[550px] text-center lg:text-left pt-12 pl-4'>
        <div className='text-2xl inline-block border-b-2 border-[#791414] lg:border-none max-w-36'>Our Mission</div>   
        <p className='text-lg pb-16 pt-4 lg:pt-0'>To unite, assist and bring many communities closer.</p>
        <div className='text-2xl inline-block border-b-2 border-[#791414] lg:border-none max-w-36'>Our Team</div>   
        <p className='text-lg pt-4 lg:pt-0'>We're led by Americans who've been blessed by this place.</p>
      </div>
    </div>
        <div className='bg-[#791414] w-full h-60 flex flex-col lg:flex-row items-center justify-center py-20'>
            <h1 className='text-4xl lg:text-5xl text-white pb-8 lg:pb-0 lg:mr-20'>Start a conversation</h1>
            <a href="/contact" className='text-white px-8 py-4 hover:text-black border-2 border-white hover:bg-white'>CONTACT US</a>
        </div>
    </div>
  );
};

export default Purpose;

