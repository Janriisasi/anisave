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
    
      <a href="/home_page" className="HomeMenu">Home</a>
      <a href="/categories">Categories</a>
      <a href="/farmers">Farmers</a>
      <a href="/menu">Menu</a>
      
      </nav>
    <a href="/profile">
  <img src={profilePic} alt="Profile" className="profile-icon" />
    </a>
    
    </div>
  );
}

export default Navbar; 