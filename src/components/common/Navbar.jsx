import React from 'react';
import { Link } from 'react-router-dom';
import "./common.css"
const Navbar = () => (
  <div>
    <h2>INSTACALC</h2>
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
  </div>
);

export default Navbar;
