import React from "react";

const Search = ({ movieSearchHandler }) => {
	return (
		<input
			type="text"
			placeholder="Search for movies"
			onChange={e => movieSearchHandler(e.target.value)}
		/>
	);
};

export default Search;
