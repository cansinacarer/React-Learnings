import "./App.css";
import { useState } from "react";

function App() {
	const [colorTitle, setColorTitle] = useState("");
	const [hexColor, setHexColor] = useState("#000000");

	const submit = (e) => {
		// Prevent the form from submitting
		e.preventDefault();

		// Do something with the inputs
		console.log(`${colorTitle}, ${hexColor}`);

		// Clear the form
		setColorTitle("");
		setHexColor("#000000");
	};
	return (
		<form onSubmit={submit}>
			<input
				onChange={(event) => setColorTitle(event.target.value)}
				type="text"
				value={colorTitle}
				placeholder="color title..."
			/>
			<input
				onChange={(event) => setHexColor(event.target.value)}
				type="color"
				value={hexColor}
			/>
			<button>ADD</button>
		</form>
	);
}

export default App;
