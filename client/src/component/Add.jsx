import React from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";
import AddMark from "../assets/add.png"

function AddProduct() {
  // Initialize navigation hook
  const navigate = useNavigate();

  // Function to redirect to sell product page
  const goToSellProduct = () => {
    // Navigate to the sell product page
    navigate('/sellingProduct');
  };

  return (
    <div>
      <div className="add-container">
        {/* Add onClick handler to the image */}
        <img 
          src={AddMark} 
          alt="Mark" 
          className="addmark"
          onClick={goToSellProduct}
          style={{ cursor: 'pointer' }} // Optional: change cursor to indicate clickability
        />
      </div>
    </div>
  );
}

export default AddProduct;