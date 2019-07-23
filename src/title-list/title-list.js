import React from "react";

import Title from "../title/title";

import "./title-list.css";

const TitleList = ({ starWars, movieTitleHandler }) => {
	return (
		<div className="title-list">
			{starWars.map(data => {
				const { episode_id, title } = data.fields;

				return (
					<Title
						key={episode_id}
						title={title}
						movieTitleHandler={movieTitleHandler}
					/>
				);
			})}
		</div>
	);
};

export default TitleList;
