import React from 'react'
import Food from './Food.js'
import saladImage from "../assets/greek salad.jpg"; 
import bruchettaImage from "../assets/bruchetta.svg";
import lemonImage from "../assets/lemon dessert.jpg";
import '../App.css'


function Weekly() {
    return (
        <div className="weekly-block">
            <div className="weekly-content">
                <div className="food-row">
                    <h1 className="weekly-speacial">This week's specials!</h1>
                    <button className="free-trial">Online Menu</button>
                </div>
                <div className="weekly-specials">
                    <Food image={saladImage}
                    name="Greek Salad"
                    price="$12.99"
                    description="The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>

                    <Food image={bruchettaImage} name="Bruchetta"
                    price="$5.99"
                    description="The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>

                    <Food image={lemonImage} name="Lemon Dessert"
                    price="$16.99"
                    description="The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>

                </div>
            </div>
        </div>
    )
}

export default Weekly