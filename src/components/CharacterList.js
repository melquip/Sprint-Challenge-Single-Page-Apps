import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList(props) {
	const [characters, setCharacters] = useState([]);
	const [search, setSearch] = useState('');
	const [searchResults, setSearchResults] = useState([]);
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
			setCharacters([]);
		};
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
	}, []);

	useEffect(() => {
		if (search !== '') {
			console.log("SEARCHING");
			let _searchResults = characters.filter(char => (
				char.name.search(search) !== -1 ||
				char.gender.search(search) !== -1 ||
				char.species.search(search) !== -1 ||
				char.type.search(search) !== -1 ||
				char.status.search(search) !== -1
			));
			setSearchResults(_searchResults);
		} else {
			setSearch('');
			setSearchResults([]);
		}
		return () => {
		};
	}, [search])

	const charList = (searchResults.length > 0 ? searchResults : characters);
	return (
		<section className="character-list">
			<SearchForm
				search={search}
				setSearch={setSearch}
			/>
			<h2>Character List</h2>
			{
				charList.map(char => <CharacterCard key={char.id} data={char} />)
			}
		</section>
	);
}
