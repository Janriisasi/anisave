import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../component/Navbar";
import FarmerCard from "../card/farmerCard";
import QuestionMark from "../component/Question";
import "./farmers.css";
import searchIcon from "../assets/searchIcon.png";

function farmers() {
  return (
    <div className="container-farmer">
      {/* Header with Navbar */}
      <div className="header">
        <Navbar />
      </div>
       {/* Search bar */}
            <div className="searchBar-farmer">
              <input type="text" id="search" placeholder="Search..." />
              <img src={searchIcon} alt="search" className="searchIconfarmer" />
            </div>
            <p className="farmerTitle">Farmers</p>
            <QuestionMark/>
            {/*Farmer Cards*/} 
             <div className="farmBox">
            <FarmerCard farmerName="Clyde Rex Flores"/>
            <FarmerCard farmerName="Alis Gho"/>
            
            </div>

            

     
    </div>
  );
}

export default farmers;