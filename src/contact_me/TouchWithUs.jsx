import React from 'react'
import ContactInput from '../components/ContactInput'

const TouchWithUs = () => {
  return (
    <section className='section-padding mt-[153px] mb-[115px]'>
      <div className='mb-11'>
        <h2 className='text-h2 text-white'>Get in Touch With Us</h2>
      </div>
      <div className=''>
        <ContactInput
          title='name'
        />
        <ContactInput
          title='subject'
        />
        <ContactInput
          title='message'
        />
        <button className='py-[11px] px-10 rounded-full bg-primary'>
          <p className='font-rubik font-medium text-lg md:text-2xl text-white uppercase'>send</p>
        </button>
      </div>
    </section>
  )
}

export default TouchWithUs