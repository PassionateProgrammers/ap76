import React, {useState} from 'react';
import Logo from '../assets/logo.png';
import {useLocation} from 'react-router-dom';
import {FaBars, FaTimes, FaLinkedin, FaFacebook } from 'react-icons/fa'
import x from '../assets/x-mobile.svg'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);

    const location = useLocation();

    const handleMenuItemClick = () => setNav(false);

  return (
    <div className='fixed z-50 text-[#11203F] font-semibold bg-[#f5f5f5] w-full h-[75px] sm:h-[100px] flex justify-between items-center px-4 md:px-20'>
        <div className='flex items-center'>
            <a className='flex items-center' href="/">
                <img src={Logo} alt='ap76logo' className='w-24 sm:w-36'/>
                <div className='pl-8 flex flex-col'>
                    <h1 className='text-2xl font-bold'>ap76.org</h1>
                    <h1 className='text-xl'>America United</h1>
                </div>
            </a>
        </div>
        <ul className='hidden lg:flex'>
            <li onClick={handleMenuItemClick} className={location.pathname === '/' ? 'active' : ''}>
                <a href="/">Home</a>
            </li>
            <li onClick={handleMenuItemClick} className={location.pathname === '/news' ? 'active' : ''}>
                <a href='/news'>News</a>
            </li>
            <li onClick={handleMenuItemClick} className={location.pathname === '/mission' ? 'active' : ''}>
                <a href="/what-we-do">What We Do</a>
            </li>
            <li onClick={handleMenuItemClick} className={location.pathname === '/about' ? 'active' : ''}>
                <a href="/about">About</a>
            </li>
            <li onClick={handleMenuItemClick} className={location.pathname === '/contact' ? 'active' : ''}>
                <a href="/contact">Contact</a>
            </li>
            <li onClick={handleMenuItemClick}>
                <a href="https://buy.stripe.com/cN22c89EXfre8fK7ss" className="rounded-full bg-[#050095] hover:bg-[#04005c] text-white px-4 py-2">Donate</a>
            </li>
        </ul>

        {/* hamburger */}
        <div className='lg:hidden z-50'>
            <button onClick={handleClick}>
                {!nav ? <FaBars size={20} /> : <FaTimes size={20}/>}
            </button>
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-white text-4xl flex flex-col justify-center items-center space-y-8'}>
            <li onClick={handleMenuItemClick}>
                <a href="/">Home</a>
            </li>
            <li onClick={handleMenuItemClick} className={location.pathname === '/news' ? 'active' : ''}>
                <a href='/news'>News</a>
            </li>
            <li onClick={handleMenuItemClick} className={location.pathname === '/mission' ? 'active' : ''}>
                <a href="/what-we-do">What We Do</a>
            </li>
            <li onClick={handleMenuItemClick} className={location.pathname === '/about' ? 'active' : ''}>
                <a href="/about">About</a>
            </li>
            <li onClick={handleMenuItemClick} className={location.pathname === '/contact' ? 'active' : ''}>
                <a href="/contact">Contact</a>
            </li>
            <li onClick={handleMenuItemClick} className="py-2">
                <a href="https://buy.stripe.com/cN22c89EXfre8fK7ss" className="rounded-full bg-[#050095] hover:bg-[#04005c] text-white px-8 py-4">Donate</a>
            </li>
            <li><h1 className='text-[#791414]'>Follow Us On:</h1></li>
            <li className='flex flex-row space-x-2 pb-8'>
                <a href="https://www.linkedin.com/company/ap76inc/" target="_blank" rel="noopener noreferrer" className='text-[#791414]'><FaLinkedin size={80}/></a>
                <a href="https://www.facebook.com/people/AP76/61557181844602/" target="_blank" rel="noopener noreferrer" className='text-[#791414]'><FaFacebook size={80}/></a>
                <a href="https://x.com/SupportAp76?s=20" target="_blank" rel="noopener noreferrer" className='text-[#791414]'>
                  <img src={x} alt='x-logo'/>
                </a>
            </li>
        </ul>

    </div>
  )
}

export default Navbar