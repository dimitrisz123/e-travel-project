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
			<span>EPISODE: {episodeNumber}</span>
			<span>{title}</span>
			<span>{releaseDate}</span>
		</button>
	);
};

export default Title;
