import "./App.css";

const [firstCity, second] = ["Istanbul", "Ankara", "Izmir", "Antalya"];

function App({ cheer, library }) {
	return (
		<div className="App">
			<h1>
				{cheer} from {library} in {firstCity} and {second}.
			</h1>
		</div>
	);
}

export default App;
