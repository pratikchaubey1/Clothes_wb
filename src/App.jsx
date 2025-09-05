import React from 'react'
import LandingPage from './Components/LandingPage'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Contact from './Pages/Contact'
import Sneaker from './Pages/Sneaker'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Sneaker" element={<Sneaker/>}/>
      </Routes>
    </>
  )
}

export default App
