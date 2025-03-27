import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/anisave.svg"; 
import "./termsandcon.css"; 

const TermsAndConditions = () => {
    const navigate = useNavigate();
  
    const handleBackToLogin = () => {
      navigate('/');
    };

  return (
    <div className="terms-page">
      <div className="back-navigation" onClick={handleBackToLogin}>
        <span className="back-arrow">&#8592;</span>
      </div>
      
      <div className="logo-container">
        <img src={logo} alt="Anisave Logo" className="logo" />
      </div>

      <div className="terms-container">
        <h1>Terms and Conditions</h1>
        <p className="update-date">Last Updated: January 29 2025</p>
        
        <div className="terms-content">
          <p>Welcome to Anisave! These Terms & Conditions govern your use of our platform. By using Anisave, you agree to these terms.</p>

          <h2>1. Introduction</h2>
          <p>Anisave connects farmers and suppliers directly to facilitate fair trade. By using our app, you agree to follow these terms.</p>

          <h2>2. Account Registration</h2>
          <ul>
            <li>Users must provide accurate information when signing up.</li>
            <li>You are responsible for maintaining account security terms.</li>
          </ul>

          <h2>3. Prohibited Activities</h2>
          <p>Users must not:</p>
          <ul>
            <li>Provide false information.</li>
            <li>Engage in fraudulent transactions.</li>
          </ul>

          <h2>4. Liability & Disclaimers</h2>
          <ul>
            <li>anisave operates as a price monitoring service and does not guarantee the quality or accuracy of products listed. We are not responsible for any financial losses, damages, or inconveniences resulting from transactions made based on the information provided. Users are encouraged to verify details and exercise their own judgment before making purchasing decisions.</li>
          </ul>

          <h2>5. Account Suspension & Termination</h2>
            <p>We reserve the right to suspend or terminate accounts violating these terms.</p>

          <h2>6. Contact Us</h2>
          <p>For questions, contact support@anisave.com.</p>

        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;