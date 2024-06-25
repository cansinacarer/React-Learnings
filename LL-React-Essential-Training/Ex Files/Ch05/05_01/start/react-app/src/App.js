import "./App.css";
import { useState } from "react";

function App() {
	const [title, setTitle] = useState("");
	const [color, setColor] = useState("#000000");
	const submit = (e) => {
		// Prevent the default form behavior
		e.preventDefault();

		// Get the value of the input fields
		// We are listening to the onChange event of the input fields so we don't need to

		// Do something with it
		console.log(title, color);

		// Clear the form
		setTitle("");
		setColor("#000000");
	};

	return (
		<form onSubmit={submit}>
			<input
				onChange={(event) => setTitle(event.target.value)}
				value={title}
				type="text"
				placeholder="Color title"
			/>
			<input
				onChange={(event) => setColor(event.target.value)}
				value={color}
				type="color"
			/>
			<button>Add</button>
		</form>
	);
}

export default App;
