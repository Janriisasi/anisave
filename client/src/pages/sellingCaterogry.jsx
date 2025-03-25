import React from "react";
import "./sellingCategory.css";
import Navbar from "../component/Navbar";
import SellingCard from "../card/sellingCard";
import Dropdown from "../component/dropDown";
import { useNavigate } from "react-router-dom";

function SellingCategory() {
    // Hook for navigation
    const navigate = useNavigate();

    // Function to navigate to the next page
    const handleNextClick = () => {
        navigate("/sellingProduct");
    };

    // Dropdown options
    const options = {
        Category: ["Vegetables", "Fruits", "Grains", "Herbs"],
    };

    // Function to handle selection
    const handleSelect = (selectedOption) => {
        console.log("Selected:", selectedOption);
    };

    return (
        <div className="container_SellingProduct">
            {/* Navbar */}
            <div className="header">
                <Navbar />
            </div>

            {/* Main Content */}
            <div>
                <SellingCard 
                    selection="Category"
                    box=""
                    description="Choose a category you wish to sell"
                />
                <Dropdown options={options} opSelect={handleSelect} />

                {/* Next Button */}
                <div className="buttons" onClick={handleNextClick}>
                    <p>Next</p>
                </div>
            </div>
        </div>
    );
}

export default SellingCategory;
