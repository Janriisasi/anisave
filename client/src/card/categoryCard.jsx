import React from "react";
import { useNavigate } from "react-router-dom";
import "./categoryCard.css";




function categoryCard({type,imageURL}){
const navigateToFarmers =useNavigate();

const farmerNavigation =()=>{
    navigateToFarmers ("/farmers");
};
    return(
    <div className="category-card" onClick={farmerNavigation} style={{backgroundImage: `url(${imageURL})`}}>
    <div className="text-container"></div>
    <div className="text">{type}</div>
</div>
    );
}

export default categoryCard;