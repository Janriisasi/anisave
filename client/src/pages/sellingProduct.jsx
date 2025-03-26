import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sellingProduct.css';
import FAQ from "../component/Question"

const SellProduct = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('');
  const [product, setProduct] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('');

  const categories = ['Vegetables', 'Fruits', 'Herbs'];

  const handleNext = () => {
    setStep(prevStep => Math.min(prevStep + 1, 4));
  };

  const handleBack = () => {
    setStep(prevStep => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = () => {
    // Validate all fields before submission
    if (category && product && size && quantity) {
      //logic for backend API
      
      // After successful submission, redirect to profile
      navigate('/profileNav', { 
        state: { 
          productDetails: {
            category,
            product,
            size,
            quantity
          }
        } 
      });
    } else {
      // Optional: show an error message if fields are not complete
      alert('Please complete all fields before submitting.');
    }
  };

  const renderStepContent = () => {
    switch(step) {
      case 1:
        return (
          <div className="step-content">
            <h2>Select a Category</h2>
            <p>Choose a category for the product you wish to sell.</p>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="dropdown"
            >
              <option value="">Select Category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        );
      case 2:
        return (
          <div className="step-content">
            <h2>Enter Product Name</h2>
            <p>Enter the specific product you wish to sell. Provide accurate details for your listing.</p>
            <input 
              type="text"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="dropdown"
              placeholder="Enter product name"
              disabled={!category}
            />
          </div>
        );
      case 3:
        return (
          <div className="step-content">
            <h2>Product Size</h2>
            <p>Provide the size of the product (if applicable) to help buyers choose the right fit.</p>
            <select 
              value={size} 
              onChange={(e) => setSize(e.target.value)}
              className="dropdown"
            >
              <option value="">Select Size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
        );
      case 4:
        return (
          <div className="step-content">
            <h2>Product Quantity</h2>
            <p>Choose either kilogram or pieces of items you have available for sale. Ensure this number is accurate to avoid overselling and to provide a smooth transaction process.</p>
            <div className="quantity-input">
              <input 
                type="number" 
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="dropdown"
              />
              <select className="unit-select">
                <option value="kg">kg</option>
                <option value="pieces">pieces</option>
              </select>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
    <div className="sell-product-container">
      <div className="progress-bar">
        {[1, 2, 3, 4].map(s => (
          <div 
            key={s} 
            className={`progress-step ${step >= s ? 'active' : ''}`}
          ></div>
        ))}
      </div>
      
      <div className="main-content">
        <h1>Sell a Product</h1>
        
        {renderStepContent()}
        
        <div className="navigation-buttons">
          {step > 1 && (
            <button 
              className="back-button"
              onClick={handleBack}
            >
              Back
            </button>
          )}
          {step === 4 ? (
            <button 
              className="submit-button"
              onClick={handleSubmit}
              disabled={!category || !product || !size || !quantity}
            >
              Submit
            </button>
          ) : (
            <button 
              className="next-button"
              onClick={handleNext}
              disabled={
                (step === 1 && !category) || 
                (step === 2 && !product) || 
                (step === 3 && !size)
              }
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
        <FAQ />
        </div>
  );
};

export default SellProduct;