import React from "react";
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
            <div className="searchBar-category">
              <input type="text" id="search" placeholder="Search..." />
              <img src={searchIcon} alt="search" className="searchIconfarmer" />
            </div>
            <p className="farmerTitle">Farmers</p>
            <QuestionMark/>
            {/*Farmer Cards*/} 
             <div className="farmBox">
            <FarmerCard farmerName="Clyde"/>
            <FarmerCard farmerName="Mia K."/>
            <FarmerCard farmerName="Johnny Pig"/>
            <FarmerCard farmerName="Tiger Commando"/>
            
            </div>

            

     
    </div>
  );
}

export default farmers;