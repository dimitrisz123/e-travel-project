import React from "react";

import "./title.css";

const Title = ({ title, movieTitleHandler, releaseDate, episodeNumber }) => {
	return (
		<button
			className="title"
			onClick={() => {
				movieTitleHandler(title);
			}}
		>
			<div className="title-inner">
				<span>EPISODE: {episodeNumber}</span>
				<span className="movie-name">{title}</span>
				<span>{releaseDate}</span>
			</div>
		</button>
	);
};

export default Title;
