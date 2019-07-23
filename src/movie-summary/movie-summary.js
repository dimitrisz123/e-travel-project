import React from "react";

const MovieSummary = ({ details, noDetails }) => {
	if (noDetails) {
		return <p>No Movies Selected</p>;
	} else {
		return (
			<div>
				{details.map(info => {
					console.log(info);
					return <p key={info.id}>{info.fields.opening_crawl}</p>;
				})}
			</div>
		);
	}
};

export default MovieSummary;
