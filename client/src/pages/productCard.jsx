import React from "react";
import "./productCard.css";

function ProductCard({ name, qty, size, marketData, productImage }) {
  return (
    <div className="product-card">
      <img src={productImage} alt="tomato" className="product-image" />
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
        <button className="button-market" onClick={marketData}>
          View Market Data
        </button>
      </div>
    </div>
  );
}

export default ProductCard;