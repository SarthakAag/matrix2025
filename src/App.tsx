import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingEquations from './components/FloatingEquations';
import Home from './pages/Home';
import About from './pages/About';
import Teams from './pages/Teams';
import Events from './pages/Events';
import Enigma26 from './pages/Enigma26';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <FloatingEquations />
        <Navbar />
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/events" element={<Events />} />
              <Route path="/enigma26" element={<Enigma26 />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;