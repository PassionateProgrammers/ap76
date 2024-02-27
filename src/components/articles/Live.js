import React, { useState } from 'react';
import { FaChevronRight, FaShareSquare } from 'react-icons/fa'
import flag from '../../assets/USflag1.jpg'

const Live = () => {

    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        try {
          if (navigator.share) {
            await navigator.share({
              title: 'Share this link',
              url: window.location.href
            });
            console.log('Link shared successfully');
          } else {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }
        } catch (error) {
          console.error('Error sharing link:', error);
        }
      };

    return (
        <div className='pt-[80px] max-w-[1100px] mx-auto'>
          <div className='my-20'>
          </div>
          <div className='p-8 mb-20 w-full h-screen bg-white flex flex-col'>
            <div className='flex text-sm items-center space-x-2'>
                <a href='/ap76/#/'><p className='inline border-b-2 border-[#791414] hover:text-[#FF0000]'>Home</p></a>
                <p>{<FaChevronRight size={12}/>}</p>
                <a href='/ap76/#/news'><p className='inline border-b-2 border-[#791414] hover:text-[#FF0000]'>News</p></a>
                <p>{<FaChevronRight size={12}/>}</p>
                <p>Our New Site Is Now Live!</p>
                <button onClick={handleShare} className='p-2 hover:text-[#FF0000]'>
                    <FaShareSquare size={20}/>
                </button>
                <div className={`copied-text ${copied ? 'show' : ''}`}>
                <p className='text-white bg-[#FF0000] p-1 rounded-sm'>Copied to clipboard!</p>
                </div>
            </div>
            <div className='flex justify-center items-center py-8'>
                <img src={flag} alt="flag" className='w-[600px]'/>
            </div>
            <h1 className='text-4xl font-bold'>Our New Site Is Now Live!</h1>
            <div className='flex flex-row space-x-2'>
            <p className='my-2 text-xs font-semibold'>Admin</p>
            <p className='my-2 text-xs'>|</p>
            <p className='my-2 text-xs text-[#FF0000]'>February 24, 2024</p>
            </div>
            <p>We are proud to announce the launch of our redesigned website. It is now live and located at the same address: https://www.ap76.org/</p>
          </div>
        </div>
      )
}

export default Live