import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const HomePage = () => (
  <>
    <Navbar />
    <div >
      <section>
        <h1>Welcome to LoanPro</h1>
        <p >Manage your loans efficiently with real-time calculations and reminders.</p>
      </section>
    </div>
    <div>
    <section>
      <h2>Features</h2>
      <ul>
        <li>Monthly Loan Payment Calculation</li>
        <li>Detailed Amortization Schedule</li>
      </ul>
    </section>
    </div>
    <Footer />
  </>
);

export default HomePage;