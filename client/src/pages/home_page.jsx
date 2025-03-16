import React from "react";
import './home_page.css';
import Logo from "../assets/anisave.svg";
import profilePic from "../assets/profile.png";
import searchIcon from "../assets/searchIcon.png";

const Homepage = () => {
  return (
<div clasName = "container">
    {/*Header with navigational bar*/}
   <div className= "header">
    <div className="logo"><img className="logo" alt="Anisave Logo" src={Logo}></img></div>
    <div className="navbar">
        <p>Home</p>
        <p>Categories</p>
        <p>Farmers</p>
        <p>Menu</p>
    <img src={profilePic} alt="Profile"className="profile-icon"/>;
    </div>
   </div>

    {/*Search bar*/}
    <div className="searchBar">
    <input type="text"
           id ="search"
           placeholder="Search..."/>
    <img src={searchIcon} alt="search" className="searchIcon" />
    </div>

    {/*Products*/}
    <div className="Product-container">
    <p className="product-title">Products</p>
    <div className="product-list">
        
    </div>
    </div>
   </div>

  );
};

export default Homepage;