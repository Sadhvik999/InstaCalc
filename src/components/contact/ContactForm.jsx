import React from 'react';

const ContactForm = () => (
  <form>
    <h2>Contact Us</h2>
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <textarea placeholder="Your message" />
    <button type="submit">Send</button>
  </form>
);

export default ContactForm;
