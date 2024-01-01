import React from 'react'
import WorksCard from '../components/WorksCard'

import alnasr from './../assets/alnasr.jpg'
import chat from './../assets/chat-n-rechat.jpg'
import coffetto from './../assets/coffetto.jpg'

const Works = () => {
  return (
    <section className='section-padding mt-[101px] mb-[176px]'>
      <div className='mb-[60px]'>
        <div className='md:flex md:items-center gap-3 mb-16'>
          <WorksCard
            link='https://alnasr-official.netlify.app/'
            img={alnasr}
            tagline='Responsive'
            title='Al Nasr landing page'
          />
          <WorksCard
            link='https://chat-n-rechat.netlify.app/'
            img={chat}
            tagline='Responsive'
            title='Chat n Rechat landing page'
          />
          <WorksCard
            link='https://coffetto-landing-page.netlify.app/'
            img={coffetto}
            tagline='Responsive'
            title='Coffetto landing page'
          />
        </div>
        <div className='md:flex md:items-center gap-3 mb-16'>
          <WorksCard
            link='https://alnasr-official.netlify.app/'
            img={alnasr}
            tagline='Responsive'
            title='Al Nasr landing page'
          />
          <WorksCard
            link='https://chat-n-rechat.netlify.app/'
            img={chat}
            tagline='Responsive'
            title='Chat n Rechat landing page'
          />
        </div>
        <div className='md:flex md:items-center gap-3 mb-16'>
          <WorksCard
            link='https://alnasr-official.netlify.app/'
            img={alnasr}
            tagline='Responsive'
            title='Al Nasr landing page'
          />
          <WorksCard
            link='https://chat-n-rechat.netlify.app/'
            img={chat}
            tagline='Responsive'
            title='Chat n Rechat landing page'
          />
          <WorksCard
            link='https://coffetto-landing-page.netlify.app/'
            img={coffetto}
            tagline='Responsive'
            title='Coffetto landing page'
          />
        </div>
      </div>
      <div className='text-center'>
        <button className='text-primary py-[22px] px-[38px] rounded-full border-[1px] border-primary uppercase'><p className='font-open font-bold text-[13px]'>Load more works</p></button>
      </div>
    </section>
  )
}

export default Works