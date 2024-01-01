import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"
import ProjectsCard from '../components/ProjectsCard'

import alnasr from './../assets/alnasr.jpg'
import chat from './../assets/chat-n-rechat.jpg'
import coffetto from './../assets/coffetto.jpg'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section className='section-padding mb-[166px]'>
      <div className='flex flex-col items-center mb-[80px]'>
        <h2 className='text-h2 mb-8 md:mb-[54px]'>My Projects Highlight</h2>
        <Link className='flex justify-center items-center gap-3 md:gap-[29px] py-4 md:py-[26px] px-7 md:px-[45px] rounded-full border-[1px] border-primary' to='/works'>
          <p className='font-rubik font-bold text-[13px] text-[#F4F7FA] tracking-[1.5px] uppercase'>explore more</p>
          <HiArrowNarrowRight />
        </Link>
      </div>
      <div className='flex flex-col md:justify-center md:items-center'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-[27px] mb-[27px]'>
          <ProjectsCard
            img={alnasr}
            title='Al Nasr Landing Page'
            client='Alnasr'
            work1='Landing Page'
            work2='Responsive'
          />
          <ProjectsCard
            img={chat}
            title='Chat n Rechat Landing Page'
            client='Nauv'
            work1='Landing Page'
            work2='Responsive'
          />
        </div>
        <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-[27px]'>
          <ProjectsCard
            img={coffetto}
            title='Coffetto Landing Page'
            client='Cof'
            work1='Landing Page'
            work2='Responsive'
          />
          <ProjectsCard
            img={coffetto}
            title='Coffetto Landing Page'
            client='Cof'
            work1='Landing Page'
            work2='Responsive'
          />
        </div>
      </div>
    </section>
  )
}

export default Projects