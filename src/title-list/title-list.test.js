import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import TitleList from "./title-list";

it("renders TitleList correctly", () => {
	const filteredTitle = [
		{
			fields: {
				episode_id: "1",
				title: "a new hope",
				release_date: "18-7-1999"
			}
		}
	];
	const wrapper = shallow(<TitleList filteredTitle={filteredTitle} />);
	expect(toJson(wrapper)).toMatchSnapshot();
});
