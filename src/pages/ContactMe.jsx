import React from 'react'

import Heading from './../components/Heading'
import TouchWithUs from '../contact_me/TouchWithUs'
import Address from '../contact_me/Address'
import Footer from './../components/Footer'

const ContactMe = () => {
  return (
    <main>
      <Heading
        title='Contact Me'
        description='For Any Project Knock Us'
      />
      <TouchWithUs />
      <Address />
      <Footer />
    </main>
  )
}

export default ContactMe