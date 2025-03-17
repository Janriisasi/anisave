import React from "react";
import "./home_page.css";
import Logo from "../assets/anisave.svg";
import profilePic from "../assets/profile.png";
import searchIcon from "../assets/searchIcon.png";
import Sort from "../assets/sort.png"
import { useNavigate } from "react-router-dom";
import ProductCard from "./productCard";
import Image1 from "../assets/green.jpg";
import Image2 from "../assets/red.jpg";
import Image3 from "../assets/bellred.jpg";

function Homepage() {
  const marketNavigation = useNavigate();

  const navigateToMarket = () => {
    marketNavigation("/marketData");
  };

  return (
    <div className="container">
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
      {/* Sort Icon */}
      <button>
        <img src={Sort} alt="Sort icon" className="sortIcon" />
      </button>

      {/* Products */}
      <div className="Product-container">
        <p className="product-title">Products</p>

        {/* Tomato (Green) */}
        <ProductCard
          productImage={Image1}
          name="Tomato (Green)"
          qty="690kg"
          size="Medium" 
          marketData={navigateToMarket}
        />

        {/* Tomato (Red) */}
        <ProductCard
          productImage={Image2}
          name="Tomato (Red)"
          qty="590kg"
          size="Medium" 
          marketData={navigateToMarket}
        />

          <ProductCard
          productImage={Image3}
          name="Bell Pepper (Red)"
          qty="980kg"
          size="Large" 
          marketData={navigateToMarket}
        />
      </div>
    </div>
  );
}

export default Homepage;
