import React from 'react'
import Heading from './../components/Heading'
import Mission from './../about_me/Mission'
import SocialMedia from '../about_me/SocialMedia'
import Footer from './../components/Footer'

const AboutMe = () => {
  return (
    <main>
      <Heading
        title='About Me'
        description='Little Brief About Myself'
      />
      <Mission />
      <SocialMedia />
      <Footer />
    </main>
  )
}

export default AboutMe