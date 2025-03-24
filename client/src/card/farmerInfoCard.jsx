import React from "react";
import { useNavigate } from "react-router-dom";
import "./farmerInfoCard.css";
import ProfileFarmer from "../assets/profile.png"; 

function FarmerInfoCard({ farmer_NameInfo }) {
  const navigate = useNavigate();

  const setNavigateToProfile = () => {
    navigate(`/profileNav/${encodeURIComponent(farmer_NameInfo)}`, {
      state: { profileImage: ProfileFarmer }, // Passing profile image in state
    });
  };

  return (
    <div className="farmer_container" onClick={setNavigateToProfile}>
      <img src={ProfileFarmer} alt="profilepic" className="farmer_Prof" />
      <p className="farmer_name">{farmer_NameInfo}</p>
    </div>
  );
}

export default FarmerInfoCard;
