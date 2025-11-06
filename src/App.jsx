import { useState } from 'react'

import Home from './pages/Home'
import Location from './pages/Location'
import Gallery from './pages/Gallery'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Others from './pages/Others'
import Contact from './pages/Contact'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/others" element={<Others />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  )
}

export default App
