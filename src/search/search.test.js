import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Search from "./search";

it("renders Search correctly", () => {
	const wrapper = shallow(<Search />);
	expect(toJson(wrapper)).toMatchSnapshot();
});
