import React from 'react'

import myphotos from './../assets/ra.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const About = () => {
  return (
    <section className='section-padding md:flex md:items-center md:gap-[78px] mb-[150px] md:mb-[290px]'>
      <div className='text-center md:text-start'>
        <h3 className='mb-[26px] text-h3 md:leading-[67px]'>Let’s get know about me closer</h3>
        <LazyLoadImage src={myphotos} alt="Riski Ari" className='w-[300px] h-[250px] object-cover mb-[26px] md:hidden rounded-2xl' effect='blur' />
        <p className='mb-[26px] md:mb-[76px] font-rubik font-normal md:text-lg text-[#A8A8A8] leading-[27px]'>I am an experienced software developer in front-end development and I have strong technical skills in JavaScript, HTML, and CSS.</p>
        <button className='flex items-center gap-6 py-4 px-7 md:py-6 md:px-10 bg-primary rounded-full m-auto md:m-0'>
          <p className='font-rubik font-bold text-[13px] md:text-base text-white'>Discover More About Me</p>
        </button>
      </div>
      <div className='hidden relative md:block'>
        <div className='absolute bottom-4 -left-10 w-[55px] h-[177px] rounded-full border-[1px] border-primary z-10'></div>
        <div className='absolute -top-6 right-0 w-[110px] h-[34px] rounded-full border-[1px] border-primary z-10'></div>
        <LazyLoadImage src={myphotos} alt="Riski Ari" className='md:w-[454px] md:object-cover rounded-2xl' effect='blur' />
      </div>
    </section>
  )
}

export default About