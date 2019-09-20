import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
	const [characters, setCharacters] = useState([]);
	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		axios.get('https://rick-api.herokuapp.com/api/')
			.then(res => {
				setCharacters(res.characters);
			})
			.catch(error => console.error(error))
		return () => {
			console.log('cleanup')
		};
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
	}, []);

	return (
		<section className="character-list">
			<h2>TODO: `array.map()` over your state here!</h2>
			{
				characters.map(char => <CharacterCard data={char} />)
			}
		</section>
	);
}
