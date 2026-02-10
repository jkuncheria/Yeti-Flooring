import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import ScrollToTop from './components/ScrollToTop';
import CanonicalURL from './components/CanonicalURL';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Hardwood from './pages/Hardwood';
import Carpet from './pages/Carpet';
import Tile from './pages/Tile';
import LuxuryVinyl from './pages/LuxuryVinyl';
import Laminate from './pages/Laminate';
import Commercial from './pages/Commercial';
import CommercialHotels from './pages/CommercialHotels';
import CommercialRetail from './pages/CommercialRetail';
import CommercialGyms from './pages/CommercialGyms';
import CommercialTheaters from './pages/CommercialTheaters';
import CommercialHealthcare from './pages/CommercialHealthcare';

const App: React.FC = () => {
  return (
        <Router>
          <ScrollToTop />
          <CanonicalURL />
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/hardwood" element={<Hardwood />} />
            <Route path="/carpet" element={<Carpet />} />
            <Route path="/tile" element={<Tile />} />
            <Route path="/luxury-vinyl" element={<LuxuryVinyl />} />
            <Route path="/laminate" element={<Laminate />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/commercial/hotels" element={<CommercialHotels />} />
            <Route path="/commercial/retail" element={<CommercialRetail />} />
            <Route path="/commercial/gyms" element={<CommercialGyms />} />
            <Route path="/commercial/theaters" element={<CommercialTheaters />} />
            <Route path="/commercial/healthcare" element={<CommercialHealthcare />} />
          </Routes>
      </main>

      <Footer />
      
      {/* Integrated Gemini AI Assistant */}
      <AIChat />
    </div>
    </Router>
  );
};

export default App;