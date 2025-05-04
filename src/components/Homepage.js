import React from "react";
import "../App.css"; // Assuming you have a CSS file for styles
import image from "../assets/restauranfood.jpg"; // Assuming you have an image file

function Homepage() {
  return (
    <div className="homepage">
        <div class="page-container row-container">
            <div class="hero-text-column">
                <h1 class="little-header">Little Lemon</h1>
                <p class="homepage-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat  auctor placerat.</p>
                <button className="free-trial">Start free trial</button>
            </div>
            <div class="hero-image">
                <img src={image} alt="Special dish" />
            </div>
        </div>
    </div>
  );
}

export default Homepage;