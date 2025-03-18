import React from "react";
import Navbar from "../component/Navbar";
import "./categories.css";

function Categories({ categories }) {
  return (
    <div className="container">
      {/* Header with Navbar */}
      <div className="header">
        <Navbar />
      </div>

      
     
    </div>
  );
}

export default Categories;