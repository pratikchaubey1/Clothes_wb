import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Contact from './Pages/Contact';
import Sneaker from './Pages/Sneaker';
import Bag from './Pages/Bag';
import BaggyShirts from './Pages/BaggyShirts';
import BaggyJeans from './Pages/BaggyJeans';
import Maincard from './Pages/Maincard';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sneaker" element={<Sneaker />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/baggyshirt" element={<BaggyShirts />} />
        <Route path="/baggyjeans" element={<BaggyJeans />} />
        <Route path="/maincard" element={<Maincard />} />
      </Routes>
    </>
  );
}

export default App;
