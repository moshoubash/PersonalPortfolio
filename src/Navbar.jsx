import React from "react";
import { useEffect } from "react";

export default function Navbar(){
    useEffect(() => {
        const bars = document.querySelector(".responsive-bars");
        const links = document.querySelector(".nav-links");
        const navbar = document.querySelector(".navbar");
    
        if (bars && links) {
          const toggleMenu = () => {
            links.classList.toggle("active");
          };
          bars.addEventListener("click", toggleMenu);
    
          return () => bars.removeEventListener("click", toggleMenu); // cleanup
        }
    
        const handleScroll = () => {
          if (window.scrollY > 10) {
            navbar.classList.add("scrolled");
          } else {
            navbar.classList.remove("scrolled");
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // cleanup
      }, []);

    return (
        <nav class="navbar">
            <h3 class="full-name">Mohammad Shoubash</h3>
            <ul class="nav-links">
                <li><a href="#services">Services</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
                
            <a href="#contact" class="cv-btn">Get in Touch</a>
            
            <button class="responsive-bars"><i class="fa-solid fa-bars"></i></button>
        </nav>
    );
}