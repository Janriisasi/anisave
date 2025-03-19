import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginPage.css";
import Logo from "../assets/anisave.svg";
import axios from "axios";
import { toast } from "react-toastify"; // Ensure you have this installed

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", formData);
      toast.success(res.data.message);
      navigate("/home_page"); // Redirect to homepage after login
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Login failed. Try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="login-page">
      <div className="logo">
        <img className="logo" alt="Anisave Logo" src={Logo} style={{ width: "300px" }} />
      </div>
      <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">Log in</h1>
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* ✅ No more error */}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" className="input-field" onChange={handleChange} />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input-field"
                  onChange={handleChange}
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
            <button type="submit" className="login-btn">Log-in</button>
            <div className="or">
              <p>or</p>
            </div>
            <button type="button" className="signup-btn" onClick={handleSignUpClick}>Sign-up</button>
          </form>
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
};

export default LoginPage;
