import React from "react";
import styled from 'styled-components';

const Form = styled.div`
	form {
		width: 100%;
		display: flex;
	}
	.col {
		padding-right: 15px;
	}
	label {
		display: block;
	}
	input {
		width: 100%;
		margin-bottom: 10px;
	}
`;

export default function SearchForm(props) {
	const { search, handleChange } = props
	return (
		<section className="search-form">
			<h3>Search by</h3>
			<Form>
				<form onSubmit={e => e.preventDefault()}>
					<div className="col">
						<label htmlFor="name">Name: </label>
						<input
							id="name"
							name="name"
							type="text"
							value={search.name}
							onChange={handleChange}
							placeholder="Search character name"
						/>
					</div>
					<div className="col">
						<label htmlFor="name">Gender: </label>
						<input
							id="gender"
							name="gender"
							type="text"
							value={search.gender}
							onChange={handleChange}
							placeholder="Search character gender"
						/>
					</div>
					<div className="col">
						<label htmlFor="name">Species: </label>
						<input
							id="species"
							name="species"
							type="text"
							value={search.species}
							onChange={handleChange}
							placeholder="Search character species"
						/>
					</div>
					<div className="col">
						<label htmlFor="name">Status: </label>
						<input
							id="status"
							name="status"
							type="text"
							value={search.status}
							onChange={handleChange}
							placeholder="Search character status"
						/>
					</div>
					<div className="col">
						<label htmlFor="name">Type: </label>
						<input
							id="type"
							name="type"
							type="text"
							value={search.type}
							onChange={handleChange}
							placeholder="Search character type"
						/>
					</div>
				</form>
			</Form>
		</section>
	);
}
