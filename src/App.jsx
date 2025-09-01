import React from 'react'
import LandingPage from './Components/LandingPage'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Contact from './Pages/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
