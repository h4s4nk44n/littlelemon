import React from 'react';
import "../App.css"; // Assuming you have a CSS file for styles

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>MENU</li>
        <li>RESEVARTIONS</li>
        <li>ORDER ONLINE</li>
        <li>LOGIN</li>
      </ul>
    </nav>
  );
}

export default Navbar