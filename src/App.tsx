import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import Stage1InfoPage from './pages/stage1InfoPage';
import Stage2InfoPage from './pages/stage2InfoPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stage1-info-page" element={<Stage1InfoPage />} />
        <Route path="/stage2-info-page" element={<Stage2InfoPage />} />
        <Route path="/tuning/stage3" element={<div className="text-white p-4">Stage 3 Info folgt bald!</div>} />
        <Route path="/tuning/eco" element={<div className="text-white p-4">Eco Tuning Info folgt bald!</div>} />
        <Route path="/tuning/pops" element={<div className="text-white p-4">Pops & Bangs Info folgt bald!</div>} />
        <Route path="/tuning/dsg-knallen" element={<div className="text-white p-4">DSG Knallen Info folgt bald!</div>} />
        <Route path="/tuning/launchcontrol" element={<div className="text-white p-4">Launch Control Info folgt bald!</div>} />
        <Route path="/tuning/begrenzer" element={<div className="text-white p-4">Begrenzer Info folgt bald!</div>} />
        <Route path="/tuning/abschaltung" element={<div className="text-white p-4">Abschaltungen Info folgt bald!</div>} />
        <Route path="/tuning/getriebe" element={<div className="text-white p-4">Getriebeoptimierung Info folgt bald!</div>} />
        <Route path="/tuning/vcds" element={<div className="text-white p-4">VCDS Kodierung Info folgt bald!</div>} />
        <Route path="/kontakt" element={<div className="text-white p-4">Kontaktformular folgt bald!</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
