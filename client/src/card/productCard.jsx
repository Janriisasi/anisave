import React from "react";
import { useNavigate } from "react-router-dom";
import "./productCard.css";

function ProductCard({ name, qty, size, productImage }) {
  const navigatetoFarmers = useNavigate();

  const handleClicktoFarmers= () => {
    navigatetoFarmers(`/infoProduct/${name}`, {
      state: { vegetableImage: productImage, qty, size },
    });
  };

  return (
    <div className="product-card" onClick={handleClicktoFarmers}>
      <img src={productImage} alt={name} className="product-image" />
      <div className="name-color">
        <p>{name}</p>
      </div>

      <div className="size-labels">
        <span className={size === "Small" ? "size-active" : ""}>Small</span>
        <span className={size === "Medium" ? "size-active" : ""}>Medium</span>
        <span className={size === "Large" ? "size-active" : ""}>Large</span>
      </div>

      <div className="qty-date">
        <p className="qty">Qty: {qty}</p>
      </div>

      <div className="market-data">
        <button className="buttonMarket">View Market Data</button>
      </div>
    </div>
  );
}

export default ProductCard;
