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
import Navbar from "../components/Navbar";

function Homepage() {
  const marketNavigation = useNavigate();

  const navigateToMarket = () => {
    marketNavigation("/marketData");
  };

  return (
    <div className="container">
      <Navbar />


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

      </div>
    </div>
  );
}

export default Homepage;
