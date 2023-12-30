import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import chae1 from './../assets/chae-1.jpg'
import chae2 from './../assets/chae-2.jpg'

const Mission = () => {
  return (
    <section className='section-padding mb-[165px]'>
      <div className='md:flex md:justify-between md:items-start md:gap-[55px] md:px-[42px] text-center md:text-start mb-[146px]'>
        <h1 className='md:flex-[2] text-h1 text-white mb-[35px]'>My mission is to make beautiful app</h1>
        <p className='md:flex-1 font-open font-semibold text-base md:text-[21px] text-light-gray md:leading-[39px] -tracking-[0.6px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eligendi. Itaque dignissimos expedita vero necessitatibus, cupiditate pariatur laboriosam molestiae sint perferendis architecto quidem quod possimus.</p>
      </div>
      <div className='text-center relative md:flex md:items-center'>
        <div className='mb-2 md:mb-0 relative md:flex-1'>
          <div className='absolute -left-2 top-5 w-[55px] h-[177px] rounded-full border-[1px] border-primary z-10'></div>
          <LazyLoadImage src={chae1} alt='Twice Chaeyoung' className='h-[320px] md:w-[361px] md:h-[515px] object-cover rounded-2xl' effect='blur' />
        </div>
        <div className='relative md:flex-[2]'>
          <LazyLoadImage src={chae2} alt='Twice Chaeyoung' className='h-[320px] md:w-[750px] md:h-[515px] object-cover rounded-2xl' effect='blur' />
          <div className='absolute -bottom-6 right-3 w-[177px] h-[55px] rounded-full border-[1px] border-primary z-10'></div>
        </div>
      </div>
    </section>
  )
}

export default Mission