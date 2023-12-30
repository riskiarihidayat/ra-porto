import React from 'react'

import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe'
import MyWorks from './pages/MyWorks'



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