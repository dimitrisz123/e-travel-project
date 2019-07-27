import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Sorting from "./sorting";

it("renders Sorting correctly", () => {
	const wrapper = shallow(<Sorting />);
	expect(toJson(wrapper)).toMatchSnapshot();
});
