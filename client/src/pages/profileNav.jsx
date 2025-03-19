import React from "react";
import Navbar from "../component/Navbar";
import QuestionMark from "../component/Question";
import AddProduct from "../component/Add"
import EditIcon from "../component/Edit";
import "./profileNav.css";
import ProfilePicture from "../assets/profile.png"
import ProfCard from "../card/profileCard";
import Profile_product_card from "../card/profileProd_Card";
import green from "../assets/green.jpg";
import red from "../assets/red.jpg";
import parsley from "../assets/parsley.jpg";

function profNav() {
  return (
    <div className="container-profNav">
      {/* Header with Navbar */}
      <div className="header-profNav">
        <Navbar />
      </div>
      {/* Icons */}
      <EditIcon/>
      <AddProduct/>
      <QuestionMark/>

     { /*User Profile Details*/}
     <ProfCard
     profileImage={ProfilePicture}
     name="Clyde Rex Flores"
     email="cRex2024@gmail.com"
     address="Lambunao,Iloilo"
     contactNo="09262682103"
     />

     {/*Product Section*/}
     <p className="myProducts">Products</p>
     <div className="ProductCardDetails">
    <Profile_product_card
    picture={green}
    name="Tomato (Green)"
    size1="Medium"
    qty1="690kg"
    />
    <Profile_product_card
    picture={red}
    name="Tomato (Red)"
    size1="Medium"
    qty1="790kg"
    />

<Profile_product_card
    picture={parsley}
    name="Parsley"
    size1="Small"
    qty1="80kg"
    />
    
    </div>
    </div>
  );
}

export default profNav;