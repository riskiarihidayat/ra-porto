import React from 'react'

const ProjectsCard = ({ img, title, client, clientDes, work, workDes1, workDes2 }) => {
  return (
    <div>
      <div>
        <img src={img} alt="Web Capture" />
      </div>
      <div>
        <div className='flex items-center gap-8'>
          <h4 className='font-syne font-bold text-2xl text-white leading-[32px] mb-8'>{title}</h4>
          <span className='w-[48px] h-[1px] bg-primary'></span>
        </div>
        <div>
          <div className='flex items-center gap-4'>
            <p className='text-item-title'>{client}:</p>
            <p className='text-item-des'>{clientDes}</p>
          </div>
          <div className='flex items-center gap-4'>
            <p className='text-item-title'>{work}:</p>
            <p className='text-item-des'>{workDes1}</p>
            <p className='text-item-des'>{workDes2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard