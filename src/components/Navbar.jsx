import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { CgLoadbarSound } from "react-icons/cg"
import { FaXmark } from "react-icons/fa6"

import logo from './../assets/logo.png'

const Navbar = () => {

  let [isOpen, setisOpen] = useState(false)

  return (
    <nav className='section-padding flex justify-between items-center fixed top-0 right-0 left-0 z-50 py-2 sm:py-4 md:py-[18px] lg:py-[27px] bg-secondary-1'>
      <div>
        <LazyLoadImage src={logo} alt="logo" className='w-14 md:w-20' />
      </div>
      <ul className='hidden md:flex md:items-center md:gap-11'>
        <li>
          <Link to='/' className='nav-links'>Home</Link>
        </li>
        <li>
          <Link to='/about' className='nav-links'>About Me</Link>
        </li>
        <li>
          <Link to='/works' className='nav-links'>My Works</Link>
        </li>
        <li>
          <Link to='/contact' className='nav-contact'>Contact</Link>
        </li>
      </ul>
      <div onClick={() => setisOpen(!isOpen)} className='md:hidden'>
        {
          isOpen ? <FaXmark className='nav-icon text-3xl' /> : <CgLoadbarSound className='nav-icon -rotate-90' />
        }
      </div>
      <ul className={`absolute right-0 left-0 bottom-0 ${isOpen ? 'top-16' : 'top-[-1110%]'} pt-20 w-full h-screen flex flex-col items-center gap-6 bg-secondary-1 duration-700 -z-10 md:hidden`}>
        <li>
          <Link to='/' className='nav-links'>Home</Link>
        </li>
        <li>
          <Link to='/about' className='nav-links'>About Me</Link>
        </li>
        <li>
          <Link to='/works' className='nav-links'>My Works</Link>
        </li>
        <li>
          <Link to='/contact' className='nav-contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar