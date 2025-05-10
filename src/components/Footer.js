import React from 'react';
import "../App.css"; // Assuming you have a CSS file for styles

function Footer() {
    return (
        <footer className="footer" >
            <div className="footer-column">
                <h4>Doormat Navigation</h4>
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
                </ul>
            </div>

            <div className="footer-column">
                <h4>Contact</h4>
                <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
                </ul>
            </div>

            <div className="footer-column">
                <h4>Social Media Links</h4>
                <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;