import React from "react";
import "./tomatoRed.css";
import FarmerInfoCard from "../card/farmerInfoCard";

function TomatoRed({ vegetableImage, vegetableName, qty, size }) {
  return (
    <div>
      <img src={vegetableImage} alt={vegetableName} className="imageRed" />
      <div className="tomatoRedContent">
        <p>{vegetableName}</p>
      </div>
      <div className="Qty1_size">
        <h2 className="quantities1">Qty: {qty}</h2>
        <h2 className="Size_Label">Size: {size}</h2>
      </div>

      <h2 className="farmer_Title1">Farmers</h2>
      <div className="farmers_Card">
        <FarmerInfoCard farmer_NameInfo="Cylde Rex Flores" />
        <FarmerInfoCard farmer_NameInfo="Ahlis Gho" />
      </div>
    </div>
  );
}

export default TomatoRed;