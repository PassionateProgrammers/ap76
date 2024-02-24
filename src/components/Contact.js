import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import rushmore from '../assets/mount-rushmore.jpg'

const Contact = () => {
  return (
    <div className='pt-[80px] flex justify-center'>
      <div className='flex flex-col lg:flex-row'>
        <div className='py-20'>
          <h1 className='text-4xl lg:text-5xl'>Contact Us</h1>
          <div className='py-8'>
            <p>Social</p>
            <a href="https://www.linkedin.com/company/ap76inc" target="_blank" rel="noreferrer"><FaLinkedin size={40}/></a>
          </div>
          <div>
            <img className="w-[600px] h-auto" src={rushmore} alt="mount-rushmore"/>
          </div>
        </div>
        <div className='py-20 px-8'>
          <div className='bg-white flex justify-center items-center p-4'>
            <form method="POST" action="https://getform.io/f/mbkGYXbz" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-xl py-4'>If you have any questions or comments, please get in touch with us.</p>
                </div>
                <input className='bg-[#f5f5f5] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#f5f5f5]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#f5f5f5] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='hover:text-white text-[#791414] border-2 hover:bg-[#791414] border-[#791414] px-4 py-3 my-8 mx-auto flex items-center'>Get in Touch</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact