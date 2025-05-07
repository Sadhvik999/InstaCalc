import React, { useState } from 'react';

const LoanCalculator = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [payment, setPayment] = useState(null);

  const calculate = () => {
    const p = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;
    const monthly = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setPayment(monthly.toFixed(2));
  };

  return (
    <div>
      <h2>Quick Loan Calculator</h2>
      <input placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <input placeholder="Rate" value={rate} onChange={(e) => setRate(e.target.value)} />
      <input placeholder="Years" value={years} onChange={(e) => setYears(e.target.value)} />
      <button onClick={calculate}>Calculate</button>
      {payment && <p>Monthly Payment: ${payment}</p>}
    </div>
  );
};

export default LoanCalculator;
