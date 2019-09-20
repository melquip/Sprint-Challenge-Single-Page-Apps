import React from "react";

export default function CharacterCard(props) {
	const {
		name,
		gender,
		image,
		species,
		status,
		type
	} = props.data;
	return (
		<div className="character">
			<div>Name: {name}</div>
			<div>Gender: {gender}</div>
			<div>Species: {species}</div>
			<div>Type: {type}</div>
			<div>Status: {status}</div>
			<img src={image} alt={type}/>
		</div>
	);
}
