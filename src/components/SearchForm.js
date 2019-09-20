import React, { useState } from "react";

export default function SearchForm(props) {
	const { search, setSearch } = props
	return (
		<section className="search-form">
			<form onSubmit={e => e.preventDefault()}>
				<label htmlFor="search">Search: </label>
				<input
					id="search"
					name="search"
					type="text"
					value={search}
					onChange={e => setSearch(e.target.value)}
					placeholder="Search character"
				/>
				{/* <button type="submit">Search</button> */}
			</form>
		</section>
	);
}
