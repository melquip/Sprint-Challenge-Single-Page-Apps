import React from "react";

export default function LocationCard({ name, type, dimension }) {
	return (
		<div className="location">
			<div><b>Location:</b> {name}</div>
			<div><b>Dimension:</b> {dimension}</div>
			<div><b>Location Type:</b> {type}</div>
		</div>
	);
}
