import React, { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Lists from "./Lists.js";

//create your first component
const Home = () => {
	const [valorInput, setValorInput] = useState("");
	const [porhacer, setPorhacer] = useState([]);
	return (
		<div className="List">
			<h1>My To Do List</h1>
			<ul>
				<li>
					<input
				 type="text"
				onChange={(e) => setValorInput(e.target.value)}
				value={valorInput}
				onkeypress={(e) => {
				if (e.key == "Enter") {
				setPorhacer(porhacer.concat([valorInput]));
				setValorInput("");}
					}}>
				</input>
				</li>
				{porhacer.map((texto) => (
					<li>{texto}<i className="fa-solid fa-trash-can"></i>
					</li>
				))}

			</ul>
			<Lists />
		</div>

	);
};

export default Home;
