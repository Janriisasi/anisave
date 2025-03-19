import React from "react";
import "./profileCard.css";

function ProfCard({name,email,address,contactNo,profileImage }){
    return(
        <div>
       
       <img src={profileImage} alt="prof-pic" className="Prof-Pic" />
       <div className="profileDetails">
      <center>
        <p className="username">{name}</p>
        <p className="Email">{email}</p>
        <p className="Address">{address}</p>
        <p className="contactNo">{contactNo}</p>
      </center>
      
      </div>
        </div>
    );
};
export default ProfCard;