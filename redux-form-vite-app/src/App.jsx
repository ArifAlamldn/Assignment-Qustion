import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import FormPage from './pages/FormPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add" element={<FormPage />} />
        <Route path="/update/:id" element={<FormPage />} />
      </Routes>
    </Router>
  );
};

export default App;
