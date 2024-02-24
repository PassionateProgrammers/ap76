import React from 'react'
import logo from '../assets/logo-300x103.jpeg'

const Footer = () => {
  return (
    <div>
        <div className='bg-white w-full h-48 flex flex-col justify-center items-center'>
            <div className='w-[1100px] flex justify-center lg:justify-start items-center'>
                <img className='w-[300px] h-auto' src={logo} alt="mainlogo"/>
            </div>
        </div>
        <div className='bg-[#791414] w-full h-20 flex justify-center items-center'>
            <div className='w-[1100px] flex justify-center lg:justify-start'>
                <p className='text-md text-white'>Copyright 2022 | All rights reserved. ap76.org - America United.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer