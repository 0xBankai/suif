import React from "react";
import Header from "./components/Header";
import HowToBuy from "./components/HowToBuy";
import Hero from "./components/Hero";

function App() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-900 text-white">
			<Header />
			<Hero />
			<HowToBuy />
		</div>
	);
}

export default App;
