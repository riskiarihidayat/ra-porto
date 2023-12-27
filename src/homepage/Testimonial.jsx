import React from 'react'

import quote from './../assets/quote.svg'

const Testimonial = () => {
  return (
    <section className='relative md:flex md:items-start md:gap-[57px] mb-[120px]'>
      <div>
        <h2 className='text-h2 mb-11'>Testimonial</h2>
        <p className='text-large mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate in dolorum deleniti omnis nostrum tempore, libero nam inventore eaque minus et. Dolorum architecto dolore deserunt, omnis, velit quo odio cumque aspernatur sed itaque, autem delectus neque. Obcaecati itaque soluta magnam aliquam quis hic error rem!</p>
        <h4 className='text-h4 font-syne'>-Jack</h4>
      </div>
      <div className='absolute -top-14 right-0'>
        {/* <p className='font-syne font-extrabold text-[288px] text-primary'>“</p> */}
        <img src={quote} alt="quote" />
      </div>
    </section>
  )
}

export default Testimonial