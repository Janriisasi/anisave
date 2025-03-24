import React from 'react';
import './aboutUs.css';
import Logo from './assets/logo.svg'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="logo-section">
        <img src={Logo} alt="Anisave Logo" className="logo" />
      </div>
      <h1>About Us</h1>
      <p className="about-text">
        Anisave helps farmers sell directly to suppliers, cutting out middlemen who drive down crop prices. Our platform ensures fair earnings for farmers and better access to fresh produce for suppliers. We're building a transparent, sustainable, and fair agricultural market one deal at a time.
      </p>
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-label">Phone:</span>
          <span className="contact-value">09123456789</span>
        </div>
        <div className="contact-item">
          <span className="contact-label">Email:</span>
          <span className="contact-value">anisave@gmail.com</span>
        </div>
        <div className="contact-item">
          <span className="contact-label">Address:</span>
          <span className="contact-value">Iloilo City</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;