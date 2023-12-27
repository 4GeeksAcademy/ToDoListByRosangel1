import React, { useState } from "react";
//include images into your bundle
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

//create your first component
const Home = () => {
	const [valorinput, setValorInput] = useState("Tarea nueva");
	const [porhacer, setPorhacer] = useState([""]);
	
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
						placeholder="What needs to be done?"
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
						<li>{texto}<button onClick={() => deleteTarea(index)}><FontAwesomeIcon icon={faTrashCan} /></button>
						</li>
					)
				})}
			</ul>
			<div>{porhacer.length} Item left</div>
		</div>
	);
};

export default Home;
