import React from 'react'

const SocialMedia = () => {
  return (
    <section className='section-padding mb-[228px]'>
      <h4 className='mb-6 font-syne font-bold text-5xl text-white leading-[79px] tracking-[0.5px]'>follow me on:</h4>
      <ul className='flex flex-wrap justify-center md:justify-between items-center gap-5'>
        <li><a href="https://github.com/riskiarihidayat" className='social-media-links'>github</a></li>
        <li><a href="https://twitter.com/riskiarihidayat" className='social-media-links'>twitter</a></li>
        <li><a href="#" className='social-media-links'>facebook</a></li>
        <li><a href="https://instagram.com/riskiarihidayat" className='social-media-links'>instagram</a></li>
      </ul>
    </section>
  )
}

export default SocialMedia