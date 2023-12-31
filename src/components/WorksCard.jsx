import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const WorksCard = ({ img, tagline, title }) => {
  return (
    <div className='text-center mb-16 md:mb-0'>
      <div className='mb-8'>
        <LazyLoadImage src={img} alt="Web Screenshoot" className='md:h-[347px] object-cover rounded-2xl' effect='blur' />
      </div>
      <div>
        <p className='mb-[10px] font-open font-bold text-[13px] text-[#F4F7FA] tracking-[1.6px] uppercase'>{tagline}</p>
        <h5 className='font-open font-bold text-[24px] text-white leading-[34px] tracking-[0.5px]'>{title}</h5>
      </div>
    </div>
  )
}

export default WorksCard