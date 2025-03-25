import React from "react";
import { useState } from "react";
import "./dropDown.css";


function Dropdown ({options, onSelect, placeholder = "Select an option"}){
    const [isOpen, setIsOpen] = useState(false);
    const[seletcted, setSelected] = useState(placeholder);
    const toggleDown =()=> setIsOpen(!isOpen);
    const handleSelect =(option) => {
        setSelected(option);
        setIsOpen(false);
        if(onSelect) onSelect(option);
    };

    return(
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDown}>{seletcted} 
                <span className="arrow">▼</span>
                {
                    isOpen && (
                        <ul className="dropdown-menu">
                            {Object.keys(options).map((category) => (
                               <li key={category} className="dropdown-category">
                                <ul>
                                    {options[category].map((option, index) => (
                                    <li key={index} onClick={()=> handleSelect(option)}>
                                        {option}

                                    </li>
                                    )
                                )}
                                </ul>
                               </li> 
                            )
                        )}
                        </ul>
                    )
                }
            </button>

        </div>
    )
}
export default Dropdown;