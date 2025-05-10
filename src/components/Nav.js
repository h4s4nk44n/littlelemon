import React, { useState } from 'react';
import "../App.css"; 
import { Link } from "react-router-dom"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          <li>HOME</li>
        </Link>
        <li>ABOUT</li>
        <li>MENU</li>
        <Link to="/book-table" onClick={() => setIsOpen(false)}>
          <li>RESERVATIONS</li>
        </Link>
        <li>ORDER ONLINE</li>
        <li>LOGIN</li>
      </ul>
    </nav>
  );
}

export default Navbar;