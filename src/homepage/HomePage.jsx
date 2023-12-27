import React from 'react'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Testimonial from './Testimonial'

const HomePage = () => {
  return (
    <div className='section-padding section-top text-white'>
      <Hero />
      <About />
      <Projects />
      <Testimonial />
    </div>
  )
}

export default HomePage