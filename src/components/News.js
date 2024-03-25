import React from 'react'
import flag from '../assets/USflag1.jpg'
import { Helmet } from 'react-helmet';

const News = () => {
  return (
    <div className='pt-[80px] max-w-[1100px] mx-auto flex flex-col min-h-screen px-4 lg:px-0'>
      <Helmet>
        <title>News</title>
      </Helmet>
      <div>
        <h1 className='text-center lg:text-left text-4xl md:text-6xl font-bold drop-shadow-sm py-10 lg:py-20'>Latest Updates</h1>
      </div>
      <a href="/news/welcome-to-our-new-website" className='flex-1 overflow-y-auto'>
      <div className='mb-20 w-full h-56 bg-white flex flex-col md:flex-row drop-shadow-lg'>
        <img src={flag} alt="flag" className='md:h-56 md:w-auto w-full'/>
        <div className='md:pl-8 pt-8 lg:pt-4'>
        <h1 className='text-4xl font-bold'>Welcome To Our New Website!</h1>
        <p className='my-2 text-xs text-[#FF0000]'>March 25, 2024</p>
        <p className='mr-2'>Many thanks to James Kirk, a talented volunteer of ours for his expertise and help with it.
Now building on twelve years of success, AP76 has been strategically renewed or born again, as the case may be. Amid America’s modern-day turmoil, the timing could not be better.</p>
        </div>
      </div>
      </a>
    </div>
  )
}

export default News