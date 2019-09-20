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
			{type ? <div>Type: {type}</div> : null }
			{status !== "unknown" ? <div>Status: {status}</div> : null }
			<img src={image} alt={type ? type : name}/>
		</div>
	);
}
