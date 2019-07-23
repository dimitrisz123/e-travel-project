import React from "react";

const Title = ({ title, movieTitleHandler }) => {
	return (
		<p
			onClick={() => {
				movieTitleHandler(title);
			}}
		>
			{title}
		</p>
	);
};

export default Title;
