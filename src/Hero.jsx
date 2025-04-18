import React from "react";

export default function Hero(){
    return (
        <header class="header">
            <section class="hero">
                <div class="left-hero">
                    <p class="left-hero-top">Full-Stack Developer</p>
                    <h2 class="hero-name">Mohammad Shoubash</h2>
                    <p class="description">Problem solver with a passion for creating innovative and user-friendly web solutions.</p>
                    <a href="https://drive.google.com/file/d/147kRuQUtUJ3sjXrBqWcmrGY1SYvvXwCH/view?usp=drive_link" class="get-in-touch">Downlaod CV</a>
                    
                    <div class="social-links">
                        <a href="https://www.linkedin.com/in/mohammadshoubash/" target="_blank">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>

                        <a href="https://github.com/moshoubash" target="_blank">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>

                <div class="right-hero">
                    <div class="social">
                        <a href="https://www.linkedin.com/in/mohammadshoubash/" target="_blank">
                            <i class="fa-brands fa-linkedin"></i> LinkedIn
                        </a>
                        
                        <a href="https://github.com/moshoubash" target="_blank">
                            <i class="fa-brands fa-github"></i> Github
                        </a>
                    </div>
                </div>
            </section>
        </header>
    );
}