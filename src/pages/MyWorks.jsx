import React from 'react'

import Heading from './../components/Heading'
import Works from '../my_works/Works'
import Footer from './../components/Footer'

const MyWorks = () => {
  return (
    <main>
      <Heading
        title='My works'
        description='Showcase About Works'
      />
      <Works />
      <Footer />
    </main>
  )
}

export default MyWorks