import React from 'react';
import "../App.css"; // Assuming you have a CSS file for styles
import { Link } from "react-router-dom"; // Importing Link for navigation

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <ul className="nav-links">
        <Link to = "/" >
          <li>HOME</li>
        </Link>
        <li>ABOUT</li>
        <li>MENU</li>
        <Link to = "/book-table" >
          <li>RESEVARTIONS</li>
        </Link>
        <li>ORDER ONLINE</li>
        <li>LOGIN</li>
      </ul>
    </nav>
  );
}

export default Navbar