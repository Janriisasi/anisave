import React from "react";
import "./Vegetables.css";
import Navbar from "../component/Navbar";
import VegetableCard from "../card/vegetableCard";
import greenTomato from "../assets/green.jpg";
import redTomato from "../assets/red.jpg"
import searchIcon from "../assets/searchIcon.png";

function Vegetables(){

    return(
       <div>
        <div className="header">
         <Navbar/>
        </div>
        <div className="searchBar">
                <input type="text" id="search" placeholder="Search..." />
                <img src={searchIcon} alt="search" className="searchIcon" />
              </div>
        
        <p className="vegetableTitle">Vegetables</p>
        <div className="vegetableProduct">
         
          <VegetableCard
     
          vegetableName = "Tomato(Green)"
          vegetableImage = {greenTomato}
          quantity="750kg"
          sizes="Large" 
          
          /> 
           <VegetableCard
         
          vegetableName = "Tomato(Red)"
          vegetableImage = {redTomato}
          quantity="730kg"
          sizes="Large" 
          
          />
        
        </div>
        </div>
    );
}
export  default Vegetables;