import React, { useState } from "react";
import Canvas from "./components/Canvas";
import Instructions from "./components/Instructions";
import Result from "./components/Result";
import ResetButton from "./components/ResetButton";
import "./styles/App.css";

const App = () => {
	const [accuracy, setAccuracy] = useState(null);

	const handleAccuracyChange = (newAccuracy) => {
		setAccuracy(newAccuracy);
	};

	const resetGame = () => {
		setAccuracy(null);
	};

	return (
		<div className="app">
			<div className="sidebar">
				<Instructions />
				<Result accuracy={accuracy} />
				<ResetButton onReset={resetGame} />
			</div>
			<Canvas onAccuracyChange={handleAccuracyChange} />
		</div>
	);
};

export default App;