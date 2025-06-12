import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import "../about.css"
const AboutPage = () => (
  <>
    <Navbar />
    <section>
    <h2>About LoanPro</h2>
    <p>We provide smart tools to help users manage and track their loans with ease.</p>
    </section>
    <Footer />
  </>
);

export default AboutPage;