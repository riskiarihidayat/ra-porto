import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"
import ProjectsCard from '../components/ProjectsCard'

const Projects = () => {
  return (
    <section className='section-padding'>
      <div className='text-center mb-[80px]'>
        <h2 className='text-h2 mb-8 md:mb-[54px]'>My Projects Highlight</h2>
        <button className='flex items-center gap-3 md:gap-[29px] py-4 md:py-[26px] px-7 md:px-[45px] rounded-full border-[1px] border-primary m-auto'>
          <p className='font-rubik font-bold text-[13px] text-[#F4F7FA] tracking-[1.5px] uppercase'>explore more</p>
          <HiArrowNarrowRight />
        </button>
      </div>
      <div>
        {/* <ProjectsCard
          img={}
          title=''
          client=''
          clientDes=''
          work=''
          workDes1=''
          workDes2=''
        /> */}
      </div>
    </section>
  )
}

export default Projects