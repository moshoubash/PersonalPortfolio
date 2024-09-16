import React from 'react'
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_io2nmig', 'template_tdpk85r', form.current, 'udlucjaAB-6SFRBen')
            .then((result) => {
                console.log(result.text);
                var sBtn = document.body.getElementsByClassName("success-send")[0];
                sBtn.style.display = "block";
                
                setTimeout(() => {
                    sBtn.style.display = "none";
                }, 3000)
            }, (error) => {
                console.log(error.text);
                var sBtn = document.body.getElementsByClassName("error-send")[0];
                sBtn.style.display = "block";
                setTimeout(() => {
                    sBtn.style.display = "none";
                }, 3000)
            });
    
        e.target.reset(); // Reset the form after submission
        };
  return (
    <section id="contact" className='contact-section'>
        <h1>Contact</h1>
        <form ref={form} onSubmit={sendEmail}>
            <div className='full-name'>
                <div className='first-name'>
                    <label>First Name
                        <input type="text" name="first-name" required/>
                    </label>
                </div>
                <div className='last-name'>
                    <label>Last Name
                        <input type="text" name="last-name" required/>
                    </label>
                </div>
            </div>

            <div className='email'>
                <label>Email
                    <input type='email' name="email" required/>
                </label>
            </div>

            <div className='message'>
                <label>Message
                    <textarea name="message" required/>
                </label>
            </div>
            <button className='submit-btn'>Send</button>
        </form>
        <div className='success-send'><i class="fa-solid fa-circle-check"></i> Message Sent Successfully</div>
        <div className='error-send'><i class="fa-solid fa-circle-xmark"></i> An error occur !</div>
    </section>
  )
}

export default Contact