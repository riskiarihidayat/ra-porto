import React from 'react'

import laptop from './../assets/laptop.png'
import ContactAddress from '../components/ContactAddress'

const Address = () => {
  return (
    <section className='section-padding mb-[164px]'>
      <div className='mb-[100px]'>
        <img src={laptop} alt="Laptop in dark" />
      </div>
      <div className='md:px-[139px] flex flex-col justify-center md:justify-between items-center md:items-center gap-5 md:gap-0'>
        <ContactAddress
          description='Kediri, Indonesia'
        />
        <ContactAddress
          description='+62 85123456789'
        />
        <ContactAddress
          description='riskiarihdyt@gmail.com'
        />
      </div>
    </section>
  )
}

export default Address