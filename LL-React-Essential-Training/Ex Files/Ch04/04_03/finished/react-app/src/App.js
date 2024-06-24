import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [emotion, setEmotion] = useState("happy");

	const buttonStyle = {
		padding: "20px",
	};

	useEffect(() => {
		console.log(`It's ${emotion} now.`);
	}, [emotion]);

	function toggleEmotion() {
		if (emotion === "happy") {
			setEmotion("sad");
		} else {
			setEmotion("happy");
		}
	}
	return (
		<div className="App">
			<h1>Hello from {emotion} guy!</h1>
			<button onClick={toggleEmotion} style={buttonStyle}>
				Make it sad
			</button>
		</div>
	);
}

export default App;
