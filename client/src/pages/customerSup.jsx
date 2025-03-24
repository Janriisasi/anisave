import React from "react";
import "./customerSup.css";
import Navbar from "../component/Navbar";
function Center(){
return(
	<div>
		<Navbar/>
	<div className="container">
		<div className="details">
	<div className="title">Customer Support</div>

	<div className="label">Email</div>
	<div className="info">anisave@gmail.com</div>

	<div className="label">Phone</div>
	<div className="info">09123456789</div>

	<div className="label">Address</div>
	<div className="info">Iloilo City</div>
	</div>
	</div>
	</div>
)
}
export default Center;

