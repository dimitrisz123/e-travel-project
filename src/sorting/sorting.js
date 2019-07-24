import React from "react";

const Sorting = ({ movieSortingHandler }) => {
	return (
		<select
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
