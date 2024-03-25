import React from 'react'
import { FaLinkedin, FaFacebook } from 'react-icons/fa'
import x from '../assets/x-sidebar.svg'

const Sidebar = () => {
  return (
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justified-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/company/ap76inc/" target="_blank" rel="noopener noreferrer">
                        Linkedin <FaLinkedin size={30} />
                    </a> 
                </li>
                <li className='w-[160px] h-[60px] flex justified-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                    <a href="https://x.com/SupportAp76?s=20" target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-gray-300'>
                        <p>X (Twitter)</p>
                        <img src={x} alt='x-logo'/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justified-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.facebook.com/people/AP76/61557181844602/" target="_blank" rel="noopener noreferrer">
                        Facebook <FaFacebook size={30} />
                    </a> 
                </li>
            </ul>

        </div>
  )
}

export default Sidebar