import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Faculty from './pages/Faculty';
import Events from './pages/Events';
import StudyCorner from './pages/StudyCorner';
import Clubs from './pages/Clubs';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Faculty" element={<Faculty />} />
            <Route path="/events" element={<Events />} />
            <Route path="/study-corner" element={<StudyCorner />} />
            <Route path="/clubs" element={<Clubs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;