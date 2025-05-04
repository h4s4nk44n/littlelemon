import React from 'react';
import '../App.css'; // Assuming you have a CSS file for styles
import logo from '../assets/Logo.svg'; // Assuming you have a logo image
import Navbar from './Nav'; // Importing the Navbar component

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt="Logo" className="logo" />
      <Navbar/>
    </header>
  );
}

export default Header;