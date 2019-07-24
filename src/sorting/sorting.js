import React from "react";

import "./sorting.css";

const Sorting = ({ movieSortingHandler }) => {
	return (
		<select
			className="sorting"
			id="sort-by"
			onChange={e => movieSortingHandler(e.target.value)}
		>
			<option value="">Sort By</option>
			<option value="episode">Episode</option>
			<option value="year">Year</option>
		</select>
	);
};
export default Sorting;
