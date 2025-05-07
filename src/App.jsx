import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import AboutPage from './pages/aboutpage';
import ContactPage from './pages/ContactPage';

const App = () => (
  <Router>
    <Routes>
      {/* <Route path='/' element={<Login/>}/> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </Router>
);


export default App;
