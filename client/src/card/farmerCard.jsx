import React from "react";
import "./farmerCard.css";
import profileFarmer from "../assets/profile.png"
import { useNavigate } from "react-router-dom";

function FarmerCard({farmerName}){
const navigateto_Profile = useNavigate();

  const handleClickto_Profile= () => {
    navigateto_Profile(`/profileNav/${farmerName}`, {
      state: { profileFarmer },
    });
  };

    return(
        <div className="farmer-Container" onClick={handleClickto_Profile}>
          <img src={profileFarmer} alt="profilepic" className="farmerProf" />
          <p className="farmer-name">{farmerName}</p>

        </div>
    )
}
export default  FarmerCard;