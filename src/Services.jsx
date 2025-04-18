import React from "react";

export default function Services(){
    return (
        <section class="services" id="services">
            <h2>Services</h2>

            <div class="cards-container">
                <div class="card card-one">
                    <div class="top">
                        <p>01</p>
                        <p class="card-title">Develop Full-Stack Application</p>
                    </div>
                    <div class="bottom">
                        <p>I Can help you converting your idea into a web application using Modern Technologies.</p>
                        <a href="#" class="learn-more">Learn more</a>
                    </div>
                </div>

                <div class="card card-two">
                    <div class="top">
                        <p>02</p>
                        <p class="card-title">Enhance SEO for Websites</p>
                    </div>
                    <div class="bottom">
                        <p>Improving the performance of the website to get higher rank in Search Engines.</p>
                        <a href="#" class="learn-more">Learn more</a>
                    </div>
                </div>

                <div class="card card-three">
                    <div class="top">
                        <p>03</p>
                        <p class="card-title">Web Scraping</p>
                    </div>
                    <div class="bottom">
                        <p>Fetching the data from any resource in the Internet using Selenium.</p>
                        <a href="#" class="learn-more">Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    );
}