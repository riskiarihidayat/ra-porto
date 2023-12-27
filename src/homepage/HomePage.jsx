import React from 'react'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Testimonial from './Testimonial'
import Footer from './../components/Footer'

const HomePage = () => {
  return (
    <div className=' section-top text-white'>
      <Hero />
      <About />
      <Projects />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default HomePage