import React from 'react';
import "../App.css"; // Assuming you have a CSS file for styles
import photo1 from "../assets/chef1.jpg"

function About() {
  return (
    <div className="about-section page-container">
      <div className="about-text">
        <h1 className="about-header">Little Lemon</h1>
        <h3 className="about-city">Chicago</h3>
        <p className="about-description">
          Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago.
          We take pride in serving authentic dishes made from the freshest ingredients. Our mission is to
          provide a warm and welcoming atmosphere where families and friends can come together to enjoy delicious food.
        </p>
        <p className="about-description">
          Our chefs are passionate about Mediterranean cuisine and have years of experience in creating mouth-watering dishes
          that will transport you to the sunny shores of the Mediterranean. Whether you're looking for a quick lunch or a
          leisurely dinner, we have something for everyone.
        </p>
      </div>
      <div className="about-image">
        <img src={photo1} alt="Mario and Adrian" className="about-photo" />
      </div>
    </div>
  );
}

export default About;