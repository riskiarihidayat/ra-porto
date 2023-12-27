import React from 'react'

const Heading = ({ title, description }) => {
  return (
    <section className='section-padding pt-[148px] mb-[90px]'>
      <h1 className='text-h1 text-white mb-[10px]'>{title}</h1>
      <p className='text-large font-medium text-light-gray mb-16 md:mb-[90px]'>{description}</p>
      <div className='w-full h-[1px] bg-light-gray'></div>
    </section>
  )
}

export default Heading