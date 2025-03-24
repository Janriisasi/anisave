import React from "react";
import { useNavigate } from "react-router-dom";
import "./categoryCard.css";

function CategoryCard({ type, imageURL }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/${type}`, { state: { imageURL } }); 
  };

  return (
    <div
      className="category-card"
      onClick={handleNavigation}
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className="text-container"></div>
      <div className="text">{type}</div>
    </div>
  );
}

export default CategoryCard;
