import React from "react";
import "./Add.css";
import AddMark from "../assets/add.png"

{/*useNavigate in React to link it going to sell a product page thankss*/}

function addProduct(){
    return(
        <div>
            <div className="add-container">
                <img src={AddMark} alt="Mark" className="addmark"/>
            </div>
        </div>
    );
}
export default addProduct;