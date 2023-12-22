import React, { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Lists from "./Lists.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
//create your first component
const Home = () => {
	const [valorinput, setValorInput] = useState("Tarea nueva");
	const [porhacer, setPorhacer] = useState(["tarea de prueba"]);
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
			<button onClick={handleClick}></button>
				</li>
				{porhacer.map((texto, index) => {
					return (
						<li>{texto}<button onClick={() => deleteTarea(index)}>Delete </button>
						</li>
					)

				})}

			</ul>
			<div>Pending:{porhacer.length}</div>
		</div>

	);
};

export default Home;
