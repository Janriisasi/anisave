import React from "react";
import "./Question.css";
import { useNavigate } from "react-router-dom";
import Question from "../assets/question.png";

function questionMark(){
  const navigate = useNavigate();
  
    // Function to redirect to sell product page
    const goToFAQ = () => {
      // Navigate to the sell product page
      navigate('/customersupport');
    };
    return(
       <div>
             <div className="q-container">
               {/* Add onClick handler to the image */}
               <img 
                 src={Question} 
                 alt="Mark" 
                 className="qmark"
                 onClick={goToFAQ}
                 style={{ cursor: 'pointer' }} // Optional: change cursor to indicate clickability
               />
             </div>
           </div>
    )
}
export default questionMark;