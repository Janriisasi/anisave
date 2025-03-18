import React from "react";
import "./categoryCard.css";
import Farmers from "./farmers.jsx";


function categoryCard({type,imageURL}){
    return(
    <div className="category-card" onClick={Farmers} style={{backgroundImage: `url(${imageURL})`}}>
    <div className="text-container"></div>
    <div className="text">{type}</div>
</div>
    );
}

export default categoryCard;