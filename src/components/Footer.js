import React from 'react';
import logo from '../assets/logo-300x103.jpeg';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className='bg-white w-full h-auto lg:h-56 flex flex-col justify-center items-center'>
        <div className='w-full md:max-w-[1100px] flex flex-col px-4 py-8 lg:flex-row justify-center lg:justify-start items-center'>
          <img className='w-full md:w-[200px] lg:w-[300px] h-auto' src={logo} alt="mainlogo" />
          <div className='flex justify-center lg:justify-start pt-8 lg:pt-0 space-x-0 ml-0 lg:ml-20 lg:space-x-20'>
            <ul className='flex flex-col group'>
                <li className='group-hover:text-black group-hover:cursor-default'><h1 className='inline border-b-2 border-[#791414]'>Social</h1></li>
              <li className='group-hover:text-black pt-4 lg:text-sm'>
                <a href="https://www.linkedin.com/company/ap76inc/" target="_blank" rel="noopener noreferrer" className='text-gray-500'><FaLinkedin size={30}/></a>
              </li>
            </ul>
            <ul className='flex flex-col group'>
            <li className='group-hover:text-black group-hover:cursor-default'><h1 className='inline border-b-2 border-[#791414]'>Explore</h1></li>
              <li className='pt-4 lg:text-sm'>
                <a href="/ap76/#/">Home</a>
              </li>
              <li className='pt-2 lg:text-sm'>
                <a href='/ap76/#/news'>News</a>
              </li>
              <li className='pt-2 lg:text-sm'>
                <a href="/ap76/#/what-we-do">What We Do</a>
              </li>
              <li className='pt-2 lg:text-sm'>
                <a href="/ap76/#/about">About</a>
              </li>
              <li className='pt-2 lg:text-sm'>
                <a href="/ap76/#/">Donate</a>
              </li>
            </ul>
            <ul className='flex flex-col group'>
            <li className='group-hover:text-black group-hover:cursor-default'><h1 className='inline border-b-2 border-[#791414]'>Contacts</h1></li>
              <li className='pt-4 lg:text-sm group-hover:text-black group-hover:cursor-default'>
                <p>satish_mysore@yahoo.com</p>
              </li>
              <li className='pt-4 lg:text-sm group-hover:text-black group-hover:cursor-default'>
                <p>brconn76@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-[#791414] w-full h-20 flex justify-center items-center px-4'>
        <div className='w-full md:w-[1100px] flex justify-center lg:justify-start'>
          <p className='text-md text-white'>Copyright 2024 | All rights reserved. ap76.org - America United.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
