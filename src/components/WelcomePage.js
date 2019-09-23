import React from "react";
import { Link } from 'react-router-dom';

export default function WelcomePage() {
	return (
		<section className="welcome-page">
			<header>
				<h1>Welcome to the ultimate fan site!</h1>
				<Link to="/characters">
					View character list <br/>
      				<img
						className="main-img"
						src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
						alt="rick"
					/>
				</Link>
			</header>
		</section>
	);
}
