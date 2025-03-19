import React from "react";
import "./profileProd_Card.css";

function Profile_product_card({picture,name,size1,qty1}){
    return(
        <div>
       
        <div className="productDetails">
        
        <img src={picture} alt="Product_Picture" className="picture" />
        <p className="productName">{name}</p>

        <div className="labels">
        <span className={size1 === "Small" ? "size-active" : ""}>Small</span>
        <span className={size1 === "Medium" ? "size-active" : ""}>Medium</span>
        <span className={size1 === "Large" ? "size-active" : ""}>Large</span>
      </div>
        <div className="qty1">Qty:{qty1}</div>
        </div>

        </div>
    );
}
export default Profile_product_card;