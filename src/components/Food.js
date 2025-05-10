import "../App.css"
import React from "react";

function Food({ name, price, description, image }) {
    return (
        <div className="food-item">
            <div className="food-image">
                <img src={image} alt={name} />
            </div>
            <div className="food-details"> {/* ADD THIS WRAPPER */}
                <div className="name-price">
                    <h2 className="food-name">{name}</h2>
                    <p className="food-price">{price}</p>
                </div>
                <p className="food-description">{description}</p>
                <div className="food-delivery">
                    <p>Order a delivery</p>
                    <svg className="delivery-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="24" height="24">
                        <path fill="#495E57" d="M13.2812 6.25H17.8395L18.0182 7.23281C19.2398 7.14759..." />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Food;