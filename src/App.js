import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import axios from 'axios';


export default function App() {
	const [characters, setCharacters] = useState([])
	useEffect(() => {
		axios.get('https://rick-api.herokuapp.com/api/')
		.then(res => {
			setCharacters(res.characters);
		})
		.catch(error => console.error(error))
		return () => {
			console.log('cleanup')
		};
	}, [])
	return (
		<main>
			<Header />
		</main>
	);
}
