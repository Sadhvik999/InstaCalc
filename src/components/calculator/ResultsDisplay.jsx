import React from 'react';

const ResultsDisplay = ({ results }) => (
  <div>
    <h2>Results</h2>
    {results && (
      <>
        <p>Monthly Payment: ${results.monthly}</p>
        <p>Total Payment: ${results.total}</p>
        <p>Total Interest: ${results.interest}</p>
      </>
    )}
  </div>
);

export default ResultsDisplay;
