import React from "react";
import "./CSS/Contacts.css"; 
const ContactUs = () => {
    return (
        <div className="contact-us">
            <div className="contact-us-container">
                <h1>Contact Us</h1>
                <div className="contact-us-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <textarea rows={15} placeholder="Your Message"></textarea>
                </div>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default ContactUs;