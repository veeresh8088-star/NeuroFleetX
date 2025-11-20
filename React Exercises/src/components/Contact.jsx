import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="section-subtitle">Let's connect and collaborate! 🚀</p>

      <div className="contact-info">
        <p>📍 <strong>Location:</strong> Vellore, Tamil Nadu</p>
        <p>📱 <strong>Phone:</strong> 7845996968</p>
        <p>
          ✉️ <strong>Email:</strong>{" "}
          <a href="mailto:swaranthib@gmail.com">swaranthib@gmail.com</a>
        </p>
      </div>

      <div className="social-icons">
        <a href="mailto:swaranthib@gmail.com" title="Email">
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://github.com/Swaranthib112004"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/swaranthi-balamurugan-16442a371"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
