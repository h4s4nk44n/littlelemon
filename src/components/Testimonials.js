import '../App.css'
import React from 'react'
import TestimonialCard from './TestimonialCard.js'
import user1 from "../assets/user1.jpg"
import user2 from "../assets/user2.jpg" // Assuming you have a second user image

function Testimonials(){
    return(
        <section className="testimonial-group" aria-labelledby="testimonial-header">
                <p className="testimonial-header">Testimonials</p>
                <div className="testimonials">
                    <TestimonialCard
                        image={user1}
                        name="John Doe"
                        comment="This is the best restaurant I've ever been to! The food is amazing and the service is top-notch."
                        attitude="Liked"
                    />
                    <TestimonialCard
                        image={user2}
                        name="Jessica Smith"
                        comment="Food was cold, and taste was not good. I would not recommend this restaurant to anyone."
                        attitude="Disliked"
                    />
                </div>
        </section>
    );
}

export default Testimonials