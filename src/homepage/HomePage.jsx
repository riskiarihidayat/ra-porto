import React from 'react'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'

const HomePage = () => {
  return (
    <div className='section-padding section-top text-white'>
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default HomePage