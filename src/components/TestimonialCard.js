import React from 'react';
import "../App.css";

function TestimonialCard({ image, name, comment, attitude }) {
    return (
        <div className="testimonial-card">
            <p className="attitude">{attitude}</p>
            <div className="user-name-container">
                <div className="testimonial-image-container">
                    <img src={image} alt={name} className="testimonial-image" />
                </div>
                <h3 className="testimonial-name">{name}</h3>
            </div>
            <p className="testimonial-text">{comment}</p>
        </div>
    );
}

export default TestimonialCard;