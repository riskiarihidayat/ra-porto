import React from 'react'

const ContactInput = ({ title }) => {
  return (
    <div className='mb-[50px]'>
      <p className='font-rubik font-medium text-lg md:text-2xl text-white uppercase'>{title}</p>
      <input type="text" className='bg-transparent border-x-0 border-t-0 focus:outline-0s border-b-[1px] border-b-light-gray text-white w-full md:w-[574px]' />
    </div>
  )
}

export default ContactInput