import { useNavigate } from "react-router-dom";
import React from "react";
import "./home_page.css";
import ProductCard from "./productCard";
import Navbar from "../component/Navbar";
import Sort from "../assets/sort.png"
import searchIcon from "../assets/searchIcon.png";
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
      <Navbar/>
      </div>

      {/* Search bar */}
      <div className="searchBar">
        <input type="text" id="search" placeholder="Search..." />
        <img src={searchIcon} alt="search" className="searchIcon" />
      </div>

      {/* Sort */}
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