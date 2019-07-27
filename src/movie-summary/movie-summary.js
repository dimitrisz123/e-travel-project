import React from "react";

import "./movie-summary.css";

const MovieSummary = ({ details, noDetails }) => {
	if (noDetails) {
		return (
			<div className="summary-wrapper-default">
				<p className="summary-default">No Movies Selected</p>
			</div>
		);
	} else {
		return (
			<div>
				{details.map(info => {
					const {
						title,
						opening_crawl,
						director,
						episode_id
					} = info.fields;
					return (
						<div className="summary-wrapper" key={episode_id}>
							<p className="summary-title">{title}</p>
							<p className="summary-opening_crawl">
								{opening_crawl}
							</p>
							<p className="summary-director">
								Directed by: {director}
							</p>
						</div>
					);
				})}
			</div>
		);
	}
};

export default MovieSummary;
