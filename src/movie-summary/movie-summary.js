import React from "react";

import "./movie-summary.css";

const MovieSummary = ({ details, noDetails }) => {
	if (noDetails) {
		return (
			<div className="summary-wrapper">
				<p className="summary">No Movies Selected</p>
			</div>
		);
	} else {
		return (
			<div className="summary-wrapper">
				{details.map(info => {
					return (
						<p className="summary" key={info.id}>
							{info.fields.opening_crawl}
						</p>
					);
				})}
			</div>
		);
	}
};

export default MovieSummary;
