import React, { useState } from "react";
//include images into your bundle
//import { FontAwesomeIcon } from '@fortawesome';
//import { faTrashCan } from '@fortawesome';
//create your first component
const Home = () => {
	const [valorinput, setValorInput] = useState("Tarea nueva");
	const [porhacer, setPorhacer] = useState([""]);
	const handleClick = () => {
		setPorhacer([...porhacer, setValor])
	}
	const deleteTarea = (index) => {
		const nuevaTarea = porhacer.filter((texto, i) => i !== index)
		setPorhacer(nuevaTarea);
	}
	const handleChange = (e) => {
		setValorInput(e.target.value);
	}
	const handleOnKeydown = (e) => {
		if (e.code === "Enter") {
			setPorhacer([valorinput, ...porhacer]);
		}
	}
	return (
		<div className="List">
			<h1>My To Do List</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => {
							handleChange(e);
						}}
						onKeyDown={(e) => {
							handleOnKeydown(e);
						}}>
					</input>
				</li>
				{porhacer.map((texto, index) => {
					return (
						<li>{texto}<button onClick={() => deleteTarea(index)}> x</button>
						</li>
					)
				})}
			</ul>
			<div>Item left{porhacer.length}</div>
		</div>
	);
};

export default Home;
