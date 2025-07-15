import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stage1InfoPage from './pages/Stage1InfoPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tuning/stage1" element={<Stage1InfoPage />} />
        {/* Weitere Seiten folgen später */}
      </Routes>
    </Router>
  );
}
