import React from "react";
import "./sellingCard.css";

function sellingCard({selection,box,description}){
    return(
        <div className="sellingCard_container">
                <div>
                    <p className="sell_Title">Sell a Product</p>
                    <p className="box1"> {box}</p>
                    <p className="box2"> {box}</p>
                    <p className="box3"> {box}</p>
                    <p className="box4"> {box}</p>

                {/*Select section*/}
                <h2>Select a {selection}</h2>
                <div className="Description">{description}</div>

                </div>
        </div>
    );
}
export default sellingCard;