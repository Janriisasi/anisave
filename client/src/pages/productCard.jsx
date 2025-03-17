import React from "react";
import "./productCard.css";


function ProductCard({ name, Qty, marketData,productImage }) {
  return (
    
    <div className="product-card">
      <img src={productImage} alt= "tomato" className="product-image" />
      <div className="name-color">
      <p>{name}</p>
      </div>

      <div className="sizes">
      <p className="small">Small</p>
      <p className="medium">Medium</p>
      <p className="large">Large</p>
      </div>

      <div className="qty-date"> 
      <p className="qty">Qty: {Qty}</p>

      </div>
      <div className="market-data"> 
      <button className="button-market" onClick={marketData}>View Market Data</button>
      </div>
      </div>
    
  );
}

export default ProductCard;
