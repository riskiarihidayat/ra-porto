import React, { useState } from 'react'
import 'flowbite';
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { CgLoadbarSound } from "react-icons/cg"
// import { FaXmark } from "react-icons/fa6"

import logo from './../assets/logo.png'

const Navbar = () => {

  // let [isOpen, setisOpen] = useState(false)

  return (
      <nav className="fixed w-full z-20 top-0 start-0 py-2 sm:py-4 md:py-[18px] lg:py-[27px] bg-secondary-1">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Riski Ari</span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:hidden">
            <button data-collapse-toggle="navbar-sticky" type="button" aria-controls="navbar-sticky" aria-expanded="false">
              <CgLoadbarSound className='nav-icon -rotate-90' />
              {/* <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg> */}
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col items-center gap-6 md:gap-11 py-20 md:p-0 mt-4 font-medium bg-secondary-1 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link to='/' className='nav-links' aria-current="page">Home</Link>
              </li>
              <li>
                <Link to='/about' className='nav-links'>About Me</Link>
              </li>
              <li className='mb-10 md:mb-0'>
                <Link to='/works' className='nav-links'>My Works</Link>
              </li>
              <li>
                <Link to='/contact' className='nav-contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    // <nav className='section-padding flex justify-between items-center fixed top-0 right-0 left-0 z-50 py-2 sm:py-4 md:py-[18px] lg:py-[27px] bg-secondary-1'>
    //   <div>
    //     <LazyLoadImage src={logo} alt="logo" className='w-14 md:w-20' />
    //   </div>
    //   <ul className='hidden md:flex md:items-center md:gap-11'>
    //     <li>
    //       <Link to='/' className='nav-links'>Home</Link>
    //     </li>
    //     <li>
    //       <Link to='/about' className='nav-links'>About Me</Link>
    //     </li>
    //     <li>
    //       <Link to='/works' className='nav-links'>My Works</Link>
    //     </li>
    //     <li>
    //       <Link to='/contact' className='nav-contact'>Contact</Link>
    //     </li>
    //   </ul>
    //   <div onClick={() => setisOpen(!isOpen)} className='md:hidden'>
    //     {
    //       isOpen ? <FaXmark className='nav-icon text-3xl' /> : <CgLoadbarSound className='nav-icon -rotate-90' />
    //     }
    //   </div>
    //   <ul className={`absolute right-0 left-0 bottom-0 ${isOpen ? 'top-0' : '-top-[1]'} pt-20 w-full h-screen flex flex-col items-center gap-6 bg-secondary-1 ease-in-out duration-700 -z-10 md:hidden`}>
    //     <li>
    //       <Link to='/' className='nav-links'>Home</Link>
    //     </li>
    //     <li>
    //       <Link to='/about' className='nav-links'>About Me</Link>
    //     </li>
    //     <li>
    //       <Link to='/works' className='nav-links'>My Works</Link>
    //     </li>
    //     <li>
    //       <Link to='/contact' className='nav-contact'>Contact</Link>
    //     </li>
    //   </ul>
    // </nav>
  )
}

export default Navbar