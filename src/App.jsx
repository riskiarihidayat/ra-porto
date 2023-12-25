import React from 'react'

import { Navbar } from './components'
import { Route, Routes } from 'react-router-dom'

import HomePage from './homepage/HomePage'
import AboutMe from './about_me/AboutMe'
import ContactMe from './contact_me/ContactMe'
import MyWorks from './my_works/MyWorks'



const App = () => {
  return (
    <main className='bg-secondary-1'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/works' element={<MyWorks />} />
        <Route path='/contact' element={<ContactMe />} />
      </Routes>
    </main>
  )
}

export default App