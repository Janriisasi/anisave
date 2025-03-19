import React from "react";
import Navbar from "../components/Navbar";
import "./menu.css";

function farmers({ farmers }) {
  return (
    <div className="container">
      {/* Header with Navbar */}
      <div className="header">
        <Navbar />
      </div>

      
     
    </div>
  );
}

export default farmers;