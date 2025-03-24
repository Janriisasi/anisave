import React from "react";
import { useParams, useLocation } from "react-router-dom";
import "./infoProduct.css";
import NavBar from "../component/Navbar";
import TomatoGreen from "../infoProduct/tomatoGreen";
import TomatoRed from "../infoProduct/tomatoRed";

function InfoProduct() {
  const { vegetableName } = useParams();
  const location = useLocation();
  const { vegetableImage } = location.state || {};

  return (
    <div className="containerInfo">
      <NavBar />
      <div className="contentInfo">
        {vegetableName === "Tomato(Green)" && (
          <TomatoGreen 
            vegetableImage={vegetableImage} 
            vegetableName={vegetableName} 
            qty="750kg"
            size="Large"
          />
        )}
        {vegetableName === "Tomato(Red)" && (
        <TomatoRed
        vegetableImage={vegetableImage} 
        vegetableName={vegetableName} 
        qty= "730kg"
        size= "Large"
      />
        )}
      </div>
    </div>
  );
}

export default InfoProduct;