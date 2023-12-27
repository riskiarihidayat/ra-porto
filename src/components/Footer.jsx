import React from 'react'

import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
import logo from './../assets/logo.png'

const Footer = () => {
  return (
    <footer className='pb-[83px] pt-[100px] bg-[#131313] section-padding'>
      <div className='text-center mb-32 md:mb-[270px]'>
        <p className='text-h4 font-syne font-bold text-primary mb-[23px]'>Get in Touch With Us</p>
        <h1 className='text-h2 font-syne text-white underline'>info@riskiari.com</h1>
      </div>
      <div className='flex flex-col md:flex-row justify-center md:justify-between md:items-center gap-12 text-center md:text-start mb-[100px]'>
        <div className='flex justify-center items-center gap-1'>
          <img src={logo} alt="Logo" className='h-14' />
          <p className='font-syne font-bold text-2xl text-white'>Riski Ari</p>
        </div>
        <div>
          <p className='footer-address'>Street Avenue 21, CA</p>
          <p className='footer-address'>0-8-00-888-000</p>
        </div>
        <div>
          <p className='footer-address mb-4'>+9 0283353</p>
          <div className='flex justify-center items-center gap-1'>
            <FaFacebookSquare className='w-6' />
            <FaTwitterSquare className='w-6' />
            <FaInstagramSquare className='w-6' />
          </div>
        </div>
      </div>
      <div>
        <div className='bg-[#949494] w-full h-[1px] mb-9'></div>
        <p className='footer-address text-center'>© 2023. Ideapeel. All rights reserved. </p>
      </div>
    </footer>
  )
}

export default Footer