import React from 'react';
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/home/HeroSection';
import LoanCalculator from '../components/home/LoanCalculator';
import Features from '../components/home/Features';
import Footer from '../components/common/Footer';

const HomePage = () => (
  <>
    <Navbar />
    <HeroSection />
    <LoanCalculator />
    <Features />
    <Footer />
  </>
);

export default HomePage;