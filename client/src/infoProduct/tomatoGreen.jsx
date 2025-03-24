import React from "react";
import "./tomatoGreen.css";
import FarmerInfoCard from "../card/farmerInfoCard";



function TomatoGreen({ vegetableImage, vegetableName, qty, size }) {
 

  return (
    <div>
      <img src={vegetableImage} alt={vegetableName} className="imageGreen" />
      <div className="tomatoGreenContent">
        <p>Tomato (Green)</p>
      </div>
      <div className="Qty1_size">
      <h2 className="quantities1">Qty: {qty}</h2>
        <h2 className="size_Label">{size}</h2>
      </div>

      

      <h2 className="farmer_Title1">Farmers</h2>
      <div className="farmers_Card">
        <FarmerInfoCard farmer_NameInfo="Cylde Rex Flores" />
        <FarmerInfoCard farmer_NameInfo="Ahlis Gho" />
      </div>
    </div>
  );
}

export default TomatoGreen;
