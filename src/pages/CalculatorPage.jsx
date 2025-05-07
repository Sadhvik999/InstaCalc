import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import LoanForm from '../components/calculator/LoanForm';
import ResultsDisplay from '../components/calculator/ResultsDisplay';
import Footer from '../components/common/Footer';
import  '../calculator.css';
const CalculatorPage = () => {
  const [results, setResults] = useState(null);

  const handleCalculate = ({ amount, rate, years }) => {
    const p = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;

    if (isNaN(p) || p <= 0 || isNaN(r) || r < 0 || isNaN(n) || n <= 0) {
      alert('Please enter valid positive numbers for amount, rate, and years.');
      return;
    }

    const monthly = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    const interest = total - p;
    setResults({
      monthly: monthly.toFixed(2),
      total: total.toFixed(2),
      interest: interest.toFixed(2),
    });
  };

  return (
    <>
      <Navbar className="navbar" />
      <LoanForm className="loan-form" onCalculate={handleCalculate} />
      <ResultsDisplay className="results-display" results={results} />
      <Footer className="footer" />
    </>
  );
};

export default CalculatorPage;
