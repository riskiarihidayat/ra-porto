import React from 'react'



const About = () => {
  return (
    <section className='text-center'>
      <div>
        <h3 className='mb-[26px] text-h3'>Let’s get know about me closer</h3>
        <img src="" alt="Riski Ari" className='w-[300px] h-[370px] object-cover' />
        <p className='mb-[76px] font-rubik font-normal md:text-lg text-[#A8A8A8] leading-[27px]'>I am an experienced software developer in front-end development and I have strong technical skills in JavaScript, HTML, and CSS.</p>
        <button className='flex items-center gap-6 py-4 px-7 md:py-6 md:px-10 bg-primary rounded-full m-auto'>
          <p className='font-rubik font-bold text-[13px] text-white'>Discover More About Me</p>
        </button>
      </div>
      <div>
        <img src="" alt="Riski Ari" className='hidden md:block md:w-[454px] md:h-[506px] md:object-cover' />
      </div>
    </section>
  )
}

export default About