import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
	const [characters, setCharacters] = useState([]);
	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		axios.get('https://rickandmortyapi.com/api/character/')
			//https://rick-api.herokuapp.com/api/
			//https://rickandmortyapi.com/api/character/
			.then(res => {
				setCharacters(res.data.results);
			})
			.catch(error => console.error(error))
		return () => {
			console.log('cleanup')
		};
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
	}, []);

	return (
		<section className="character-list">
			<SearchForm />
			<h2>Character List</h2>
			{
				characters.map(char =>
					<CharacterCard key={char.id} data={char} />)
			}
		</section>
	);
}
