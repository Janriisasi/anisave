import React from "react";
import Navbar from "../components/Navbar";
import CategoryCard from "./categoryCard";
import "./categories.css";

import searchIcon from "../assets/searchIcon.png";
import vege from "../assets/vegetable.png";
import Fruit from "../assets/fruits.jpg";
import Grains from "../assets/grains.jpg";
import Herb from "../assets/herb.jpg";
function Categories({ }) {
  return (
    <div className="container-categories">
      {/* Header with Navbar */}
      <div className="header">
        <Navbar />
      </div>

      {/* Search bar */}
      <div className="searchBar-category">
        <input type="text" id="search" placeholder="Search..." />
        <img src={searchIcon} alt="search" className="searchIconcategory" />
      </div>

      {/* Category name */}
      <div className="categoryContainer">
        <p className="categoryName">Category</p>
        </div>

      {/* Category cards */}
      <div className="boxCard">
        <CategoryCard type="Vegetables" imageURL={vege} />
        <CategoryCard type="Fruits" imageURL={Fruit} />
        <CategoryCard type="Grains" imageURL={Grains} />
        <CategoryCard type="Herb" imageURL={Herb} />
        
      </div>
      
    </div>
  );
}

export default Categories;