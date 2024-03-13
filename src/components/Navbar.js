import React, {useState} from 'react';
import Logo from '../assets/logo.png';
import {useLocation} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'

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
                <a href="https://buy.stripe.com/test_00g6re1fl3kdbLy144">Donate</a>
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
            <li onClick={handleMenuItemClick}>
                <a href="https://buy.stripe.com/test_00g6re1fl3kdbLy144">Donate</a>
            </li>
        </ul>

    </div>
  )
}

export default Navbar