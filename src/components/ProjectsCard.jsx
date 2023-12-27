import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ProjectsCard = ({ img, title, client, work1, work2 }) => {
  return (
    <div>
      <div className='mb-5 md:mb-8'>
        <LazyLoadImage src={img} alt="Web Capture" className='w-[350px] md:w-[480px] object-cover' effect='blur' />
      </div>
      <div>
        <div className='flex items-center gap-8 mb-2 md:mb-8'>
          <h4 className='font-syne font-bold text-2xl text-white leading-[32px] mb-8'>{title}</h4>
          <span className='w-[48px] h-[1px] bg-primary'></span>
        </div>
        <div>
          <div className='flex items-center gap-4'>
            <p className='text-item-title'>Client:</p>
            <p className='text-item-des'>{client}</p>
          </div>
          <div className='flex items-center gap-4'>
            <p className='text-item-title'>Work:</p>
            <p className='text-item-des'>{work1}</p>
            <p className='text-item-des'>{work2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard