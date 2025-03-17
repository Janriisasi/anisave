import React from "react";
import "./home_page.css";
import Logo from "../assets/anisave.svg";
import profilePic from "../assets/profile.png";
import searchIcon from "../assets/searchIcon.png";
import { useNavigate } from "react-router-dom";
import ProductCard from "./productCard"; // Correct import
import Image1 from "../assets/green.jpg";
import Image2 from "../assets/red.jpg";

function Homepage() {
  const marketNavigation = useNavigate();

  const navigateToMarket = () => {
    marketNavigation("/marketData"); // Fixed routing
  };

  return (
    <div className="container"> {/* Fixed className */}
      {/* Header with navigation */}
      <div className="header">
        <div className="logo">
          <img className="logo" alt="Anisave Logo" src={Logo} />
        </div>
        <div className="navbar">
          <p>Home</p>
          <p>Categories</p>
          <p>Farmers</p>
          <p>Menu</p>
          <img src={profilePic} alt="Profile" className="profile-icon" />
        </div>
      </div>

      {/* Search bar */}
      <div className="searchBar">
        <input type="text" id="search" placeholder="Search..." />
        <img src={searchIcon} alt="search" className="searchIcon" />
      </div>

      {/* Products */}
      <div className="Product-container">
      <p className="product-title">Products</p>
        
          <ProductCard
            productImage = {Image1}
            name="Tomato"
            Qty="690kg"
            marketData={navigateToMarket} 
          />
          
          <ProductCard
            productImage = {Image2}
            name="Tomato" 
            Qty="590kg" 
            marketData={navigateToMarket} 
          />
          
      </div>
    </div>
  );
}

export default Homepage;
