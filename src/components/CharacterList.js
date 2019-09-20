import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

const Characters = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	.character {
		width: 100%;
		max-width: calc(50% - 20px);
		flex-basis: calc(50% - 20px);
		margin-top: 30px;
		position: relative;
		min-height: 400px;
		.content {
			position: absolute;
			bottom: 5%;
			left: 5%;
			right: 5%;
			padding: 20px;
			background-color: rgba(255, 255, 255, .7);

			font-size: 1.25rem;
			line-height: 1.5rem;
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
}
`;

export default function CharacterList(props) {
	const [characters, setCharacters] = useState([]);
	const [search, setSearch] = useState({
		name: '',
		gender: '',
		species: '',
		status: '',
		type: '',
	});

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		let searchQuery = '?' + Object.keys(search).map(key => key + '=' + search[key]).join('&');
		axios.get(`https://rickandmortyapi.com/api/character/${searchQuery}`)
			.then(res => {
				setCharacters(res.data.results);
			})
			.catch(error => console.error(error));
		return () => {};
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
	}, [search]);

	const handleChange = e => {
		setSearch({ ...search, [e.target.id]: e.target.value });
	}

	return (
		<section className="character-list">
			<h2>Character List</h2>
			<SearchForm
				search={search}
				handleChange={handleChange}
			/>
			<Characters>
				{
					characters.map(char => <CharacterCard key={char.id} data={char} />)
				}
			</Characters>
		</section>
	);
}
