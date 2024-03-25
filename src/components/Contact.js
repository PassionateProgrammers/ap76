import React from 'react';
import rushmore from '../assets/mount-rushmore.jpg';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <div className='pt-[80px] flex justify-center items-center relative'>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div
        className='absolute inset-0 bg-[#FF0000] bg-cover bg-no-repeat bg-center'
        style={{
          backgroundImage: `url(${rushmore})`,
          top: '80px',
          left: '0',
          right: '0',
          bottom: '0',
          zIndex: -1,
        }}
      >
        <div className='absolute inset-0 bg-[#350000] opacity-80'></div>
      </div>
      <div className='max-w-[800px] py-20 px-8 relative z-10'>
        <div className='flex justify-center items-center'>
          <h1 className='text-white text-4xl lg:text-5xl inline border-b-4 border-white'>Contact Us</h1>
        </div>
        <div className='mt-8 bg-white flex justify-center items-center p-10'>
          <form method="POST" action="https://getform.io/f/mbkGYXbz" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
              <p className='text-xl py-4'>Have any questions or comments? Fill out the form below and we'll respond as soon as possible.</p>
            </div>
            <input className='bg-[#f5f5f5] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#f5f5f5]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#f5f5f5] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='hover:text-white text-[#791414] border-2 hover:bg-[#791414] border-[#791414] px-4 py-3 my-8 mx-auto flex items-center'>Get in Touch</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
