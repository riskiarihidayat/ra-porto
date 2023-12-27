import React from 'react'
import Heading from '../components/Heading'
import Mission from './Mission'

const AboutMe = () => {
  return (
    <main>
      <Heading
        title='About Me'
        description='Little Brief About Myself'
      />
      <Mission />
    </main>
  )
}

export default AboutMe