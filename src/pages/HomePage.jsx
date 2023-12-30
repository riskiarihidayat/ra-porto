import React from 'react'
import Hero from '../homepage/Hero'
import About from '../homepage/About'
import Projects from '../homepage/Projects'
import Testimonial from '../homepage/Testimonial'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <main className=' section-top text-white'>
      <Hero />
      <About />
      <Projects />
      <Testimonial />
      <Footer />
    </main>
  )
}

export default HomePage