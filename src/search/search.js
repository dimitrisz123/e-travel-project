import React from "react";

import "./search.css";

const Search = ({ movieSearchHandler }) => {
	return (
		<input
			className="search"
			type="text"
			placeholder="Search for movies"
			onChange={e => movieSearchHandler(e.target.value)}
		/>
	);
};

export default Search;
