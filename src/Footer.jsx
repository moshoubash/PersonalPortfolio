import React from "react";

export default function Footer() {
    return (
        <footer id="contact">
            <h2>Contact Me</h2>
            <form class="contact-form">
                <div class="name-email">
                    <div class="form-control">
                        <label for="name">Name: </label>
                        <input type="text" placeholder="John Doe" required />
                    </div>
    
                    <div class="form-control">
                        <label for="email">Email: </label>
                        <input type="email" placeholder="example@blabla.com" required />
                    </div>
                </div>
    
                <div class="form-control">
                    <label for="message" class="textarea-label">Message:</label>
                    <textarea name="message" id="message" rows="5" placeholder="Message..."></textarea>
                </div>
    
                <button type="submit" class="submit-btn">Send Message</button>
            </form>
        </footer>
    );
}