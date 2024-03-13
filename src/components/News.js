import React from 'react'
import flag from '../assets/USflag1.jpg'

const News = () => {
  return (
    <div className='pt-[80px] max-w-[1100px] mx-auto flex flex-col min-h-screen px-4 lg:px-0'>
      <div>
        <h1 className='text-center lg:text-left text-4xl md:text-6xl font-bold drop-shadow-sm py-10 lg:py-20'>Latest Updates</h1>
      </div>
      <a href="/live" className='flex-1 overflow-y-auto'>
      <div className='mb-20 w-full h-56 bg-white flex flex-col md:flex-row drop-shadow-lg'>
        <img src={flag} alt="flag" className='md:h-56 md:w-auto w-full'/>
        <div className='md:pl-8 pt-8 lg:pt-4'>
        <h1 className='text-4xl font-bold'>Our New Site Is Now Live!</h1>
        <p className='my-2 text-xs text-[#FF0000]'>February 24, 2024</p>
        <p>We are proud to announce the launch of our redesigned website. It is now live and located at the same address: https://www.ap76.org/</p>
        </div>
      </div>
      </a>
    </div>
  )
}

export default News