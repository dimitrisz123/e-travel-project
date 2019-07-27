import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Title from "./title";

it("renders Title correctly", () => {
	const wrapper = shallow(<Title />);
	expect(toJson(wrapper)).toMatchSnapshot();
});
