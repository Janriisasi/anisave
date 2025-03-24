import React from "react";
import { useNavigate } from "react-router-dom";
import "./vegetableCard.css";

function VegetableCard({ vegetableName, vegetableImage, quantity, sizes }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/infoProduct/${encodeURIComponent(vegetableName)}`, {
      state: { vegetableImage }, 
    });
  };

  const handleMarketDataNavigation = () => {
    navigate("/marketData"); // Navigate to market data page
  };

  return (
    <div className="vegeCard" onClick={handleNavigation}>
      <img src={vegetableImage} alt="Vegetable" className="vegePicture" />
      <p className="vegeName">{vegetableName}</p>

      <div className="labelSize">
        <span className={sizes === "Small" ? "ActiveSize" : ""}>Small</span>
        <span className={sizes === "Medium" ? "ActiveSize" : ""}>Medium</span>
        <span className={sizes === "Large" ? "ActiveSize" : ""}>Large</span>
      </div>

      <p className="quantity">Qty: {quantity}</p>

      <div className="marketDataValue">
        <button className="button-market" onClick={handleMarketDataNavigation}>
          View Market Data
        </button>
      </div>
    </div>
  );
}

export default VegetableCard;