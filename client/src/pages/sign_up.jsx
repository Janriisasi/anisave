import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sign_up.css";
import Logo from "../assets/anisave.svg";
import axios from "axios";
import { toast } from "react-toastify";

const SignupPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/auth/signup", formData);
      toast.success(res.data.message);
      navigate("/homepage");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed. Try again.");
    }
  };

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
          <h1 className="login-title">Sign up</h1>
          <p>
            By signing up, you're taking the first step toward accessing exclusive features,
            and a seamless experience tailored just for you.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="fullName" className="input-field" onChange={handleChange} />
            </div>
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
            </div>
            <button type="submit" className="login-btn">Sign up</button>
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

export default SignupPage;
