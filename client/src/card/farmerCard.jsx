import React from "react";
import "./farmerCard.css";
import profileFarmer from "../assets/profile.png"
function FarmerCard({farmerName}){
    return(
        <div className="farmer-container">
          <img src={profileFarmer} alt="profilepic" className="farmerProf" />
          <p className="farmer-name">{farmerName}</p>

        </div>
    )
}
export default  FarmerCard;