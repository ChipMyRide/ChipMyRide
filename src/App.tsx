import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import Stage1InfoPage from './pages/stage1InfoPage';
import Stage2InfoPage from './pages/stage2InfoPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stage1InfoPage" element={<Stage1InfoPage />} />
        <Route path="/stage2InfoPage" element={<Stage2InfoPage />} />
      </Routes>
    </Router>
  );
}
