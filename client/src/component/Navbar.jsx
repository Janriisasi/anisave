import React from "react";
import "./Navbar.css";
import Logo from "../assets/anisave.svg";
import profilePic from "../assets/profile.png";

function Navbar() {
  return (
    <div className= "header">
    <a href="/home_page">
    <img className="logo1" alt="Anisave Logo" src={Logo} />
    </a>
    <nav className="navbar">
    
      <a href="/homepage" className="HomeMenu">Home</a>
      <a href="/categories">Categories</a>
      <a href="/farmers">Farmers</a>
      <a href="/profileNav">Profile</a>
      
      </nav>
    
    </div>
  );
}

export default Navbar; 