import React from "react";

export default function Testimonials() {
    return (
        <section class="testimonials" id="testimonials">
        <h2>Testimonials</h2>
        <div class="reviews">
            <div class="top-row">
                <div class="review">
                    <div class="reviewer-data">
                        <img src="src/material/Sarah Johnson.jpg" width="50px" />
                        <div class="name-field">
                            <p class="name">Sarah Johnson</p>
                            <p class="field">CEO, TechTrends Store</p>
                        </div>
                    </div>
                    <p class="review-content">Mohammad built an incredible e-commerce platform for us.</p>
                </div>

                <div class="review">
                    <div class="reviewer-data">
                        <img src="src/material/James Rivera.jpg" width="50px" />
                        <div class="name-field">
                            <p class="name">James Rivera</p>
                            <p class="field">Project Lead, XYZ Solutions</p>
                        </div>
                    </div>
                    <p class="review-content">Mohammad's work on our inventory system was outstanding.</p>
                </div>
            </div>
            <div class="bottom-row">
                <div class="review">
                    <div class="reviewer-data">
                        <img src="src/material/Ahmed Ali.jpg" width="50px" />
                        <div class="name-field">
                            <p class="name">Ahmed Ali</p>
                            <p class="field">Owner, Innovate Solutions</p>
                        </div>
                    </div>
                    <p class="review-content">Mohammad delivered an efficient, user-friendly platform ahead of schedule.</p>
                </div>

                <div class="review">
                    <div class="reviewer-data">
                        <img src="src/material/John Doe.jpg" width="50px" />
                        <div class="name-field">
                            <p class="name">John Doe</p>
                            <p class="field">Full-Stack Developer</p>
                        </div>
                    </div>
                    <p class="review-content">Mohammad's portfolio showcases his technical and design skills. His dedication to learning and growth is truly impressive.</p>
                </div>
            </div>
        </div>
        </section>
    );
}