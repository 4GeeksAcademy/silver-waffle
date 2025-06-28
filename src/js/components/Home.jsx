import React from "react";
import { useState, useEffect } from "react";

//create your first component
const Home = () => {

	const [ counter, setCounter ] = useState(0);

	const setup = () => { // onload
		const timer = setInterval(() => {
			setCounter(counter + 1)
		}, 1000)

		return () => clearInterval(timer);
	}

	useEffect(setup, [counter])

	return (
		<div className="text-center d-flex flex-column my-auto">
			<button className="btn btn-success"
				onClick={() => setCounter(state => state + 1)}
			>
				Increment
			</button>
			<h1>Counter {counter}</h1>
			<button className="btn btn-danger"
				onClick={() => setCounter(counter - 1)}
			>
				Decrement
			</button>
		</div>
	);
};

export default Home;