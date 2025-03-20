import React from "react";
import "./Edit.css";
import Edit from "../assets/edit.png";
function editIcon(){
    return(
        <div>
        <div className="edit-container">
            <img src={Edit} alt="Edit Icon" className="Edit_Icon" />
            
            </div>

        </div>
    );
}
export default editIcon;