import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const ContactPage = () => (
  <>
    <Navbar />
    <h2>Contact Us</h2>
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <textarea placeholder="Your message" />
    <button type="submit">Send</button>
    <Footer />
  </>
);

export default ContactPage;
