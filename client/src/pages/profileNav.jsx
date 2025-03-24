import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../component/Navbar";
import EditIcon from "../component/Edit";
import AddProduct from "../component/Add";
import QuestionMark from "../component/Question";
import ProfCard from "../card/profileCard";
import ProfileProductCard from "../card/profileProd_Card";
import green from "../assets/green.jpg";
import red from "../assets/red.jpg";
import parsley from "../assets/parsley.jpg";
import "./profileNav.css";
import defaultProfile from "../assets/profile.png";


function ProfileNav() {
  const { farmer_NameInfo } = useParams(); // Printout farmer's name in thee URL
  const {farmerName} = useParams;
  const location = useLocation();
  const { profileImage } = location.state || {}; // Get profile image from state

  return (
    <div className="container-profNav">
      <div className="header-profNav">
        <Navbar />
      </div>
      <EditIcon />
      <AddProduct />
      <QuestionMark />

      {/* User Profile Details */}
      <ProfCard
        profileImage={profileImage || defaultProfile } 
        name={farmer_NameInfo || "Julius Ken Pendon"|| farmerName}
        email="example@gmail.com"
        address="Pototan, Iloilo"
        contactNo="09014233543"
      />

      {/* Product Section */}
      <p className="myProducts">Products</p>
      <div className="ProductCardDetails">
        <ProfileProductCard picture={green} name="Tomato (Green)" size1="Medium" qty1="690kg" />
        <ProfileProductCard picture={red} name="Tomato (Red)" size1="Medium" qty1="790kg" />
        <ProfileProductCard picture={parsley} name="Parsley" size1="Small" qty1="80kg" />
      </div>
    </div>
  );
}

export default ProfileNav;
