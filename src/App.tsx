import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Stage1InfoPage from './pages/Stage1InfoPage';
import Stage2InfoPage from './pages/Stage2InfoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tuning/stage1" element={<Stage1InfoPage />} />
        <Route path="/tuning/stage2" element={<Stage2InfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
