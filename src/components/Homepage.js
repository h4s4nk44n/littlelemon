import React from "react";
import "../App.css"; // Assuming you have a CSS file for styles
import image from "../assets/restauranfood.jpg"; // Assuming you have an image file
import { Link } from "react-router-dom"; // Importing Link for navigation

function Homepage() {
  return (
    <div className="homepage">
        <div className="page-container row-container">
            <div className="hero-text-column">
                <h1 className="little-header">Little Lemon</h1>
                <p className="homepage-paragraph">Join us on a culinary journey that blends tradition with creativity. At Little Lemon, every bite is a burst of handcrafted goodness, made from the freshest ingredients.</p>
                <Link to="/book-table">
                  <button className="free-trial">Start free trial</button>
                </Link>
            </div>
            <div className="hero-image">
                <img src={image} alt="Special dish" />
            </div>
        </div>
    </div>
  );
}

export default Homepage;