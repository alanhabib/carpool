import React from "react";
import {shallow} from "enzyme";
import App from "./src/App";
import toJson from "enzyme-to-json";

it("renders correctly", () => {
	const tree = shallow(<App/>);
	expect(toJson(tree)).toMatchSnapshot();
});
