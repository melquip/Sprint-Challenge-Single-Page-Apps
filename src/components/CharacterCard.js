import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function CharacterCard(props) {
	const {
		name,
		gender,
		image,
		species,
		status,
		type,
		location,
		episode
	} = props.data;

	const [moreInfo, setMoreInfo] = useState({ location: {}, episode: {} })

	useEffect(() => {
		if (location.url && episode[0]) {
			const locationPromise = axios.get(`${location.url}`)
			const episodePromise = axios.get(`${episode[0]}`)
			Promise.all([locationPromise, episodePromise])
				.then(([locationResponse, episodeResponse]) => {
					setMoreInfo({
						location: locationResponse.data,
						episode: episodeResponse.data
					});
				})
				.catch(error => console.error(error));
		}
		return () => {
			setMoreInfo([])
		};
	}, [location.url, episode])
	return (
		<div className="character">
			<div className="content">
				<div><b>Name:</b> {name}</div>
				<div><b>Gender:</b> {gender}</div>
				<div><b>Species:</b> {species}</div>
				{type ? <div><b>Type:</b> {type}</div> : null}
				{status !== "unknown" ? <div><b>Status:</b> {status}</div> : null}
				<div className="location">
					<div><b>Location:</b> {moreInfo.location.name}</div>
					<div><b>Dimension:</b> {moreInfo.location.dimension}</div>
					<div><b>Type:</b> {moreInfo.location.type}</div>
				</div>
				<div className="episode">
					<div><b>Episode:</b> {moreInfo.episode.episode}</div>
					<div><b>Title:</b> {moreInfo.episode.name}</div>
					<div><b>Air Date:</b> {moreInfo.episode.air_date}</div>
				</div>
			</div>
			<img src={image} alt={type ? type : name} />
		</div>
	);
}
