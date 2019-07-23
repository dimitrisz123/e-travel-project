import React from "react";

import Title from "../title/title";

const TitleList = ({ starWars, movieTitleHandler }) => {
	return (
		<div>
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
