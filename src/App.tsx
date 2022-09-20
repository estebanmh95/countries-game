import React from "react";
import CountriesGameComponent from "./CountriesGameComponent";

function App() {
	const data = {
		Colombia: "Bogota",
		Ecuador: "Quito",
		Peru: "Lima",
		USA: "Washington",
	};
	return (
		<div className="App">
			<CountriesGameComponent data={data} />
		</div>
	);
}

export default App;

