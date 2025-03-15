import React, { useState } from "react";
import "./loginPage.css";
import Logo from "../assets/anisave.svg";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="logo">
        <img className="logo" alt="Anisave Logo" src={Logo} style={{ width: "300px" }} />
      </div>
      <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">Log in</h1>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" className="input-field" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="input-field"
              />
              <span
                className="material-symbols-outlined"
                id="togglePassword"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "visibility" : "visibility"}
              </span>
            </div>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button className="login-btn">Log-in</button>
          <p>or</p>
          <button className="signup-btn">Sign-up</button>
        </div>
      </div>
      <div className="termsandconditions">
        <p>
          By agreeing to our
          <a href="#"> Term and Conditions</a>, you acknowledge and accept the rules and guidelines governing the use of our platform.
        </p>
      </div>
    </div>
  );
}

export default LoginPage;