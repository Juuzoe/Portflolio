// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>You can reach me at: <a href="mailto:email@example.com">email@example.com</a></p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
