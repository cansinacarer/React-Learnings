import "./App.css";
import { useState } from "react";

function App() {
	let [clickCount, setClickCount] = useState(0);

	let myClickHandler = (event, otherArg) => {
		setClickCount(clickCount + 1);
	};
	return (
		<>
			<div className="App" style={{ padding: "80px" }}>
				<p>Click count:</p>
				<p style={{ border: "1px solid #ddd", padding: "50px 10px" }}>
					{clickCount}
				</p>
				<button onClick={myClickHandler} style={{ fontSize: "36px" }}>
					+
				</button>
			</div>
		</>
	);
}

export default App;
