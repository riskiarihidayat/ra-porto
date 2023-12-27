import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"

const Hero = () => {
  return (
    <section className='section-padding text-center mb-28 md:mb-[200px]'>
      <h1 className='text-h1 mb-12 md:mb-[93px]'>I code, you relax. Enjoy your new website without drama</h1>
      <button className='flex items-center gap-6 py-4 px-7 md:py-6 md:px-10 bg-primary rounded-full m-auto'>
        <p className='font-rubik font-bold text-[13px] text-white uppercase'>Explore works</p>
        <HiArrowNarrowRight />
      </button>
    </section>
  )
}

export default Hero