import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import App from "./App";

it("renders App correctly", () => {
	const wrapper = shallow(<App />);
	expect(toJson(wrapper)).toMatchSnapshot();
});

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
