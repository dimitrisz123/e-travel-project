import React from "react";

import Title from "../title/title";

import "./title-list.css";

const TitleList = ({ movieTitleHandler, filteredTitle }) => {
	return (
		<div className="title-list">
			{filteredTitle.map(data => {
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
