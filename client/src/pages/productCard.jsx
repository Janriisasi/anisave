<<<<<<< HEAD
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

=======
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

>>>>>>> f81776cad555027c19cca363906e2647099b505d
export default ProductCard;