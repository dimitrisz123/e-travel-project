import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import MovieSummary from "./movie-summary";

it("renders MovieSummary correctly", () => {
	const details = [
		{
			fields: {
				title: "a new hope",
				opening_crawl: "a great movie",
				director: "dim zer",
				episode_id: "6"
			}
		}
	];
	const wrapper = shallow(<MovieSummary details={details} />);
	expect(toJson(wrapper)).toMatchSnapshot();
});
