import React from "react";
import {shallow} from "enzyme";
import App from "./App";
import toJson from "enzyme-to-json";

it("renders correctly", () => {
	const component = shallow(<App/>);
	expect(component).toMatchSnapshot();
});
