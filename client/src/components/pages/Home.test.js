import React from "react";
import Home from "./Home";
import { shallow } from "enzyme";

jest.mock("react", () => {
  const ActualReact = require.requireActual("react");
  return {
    ...ActualReact,
    useContext: () => ({
      authContext: {}
    })
  };
});

describe("Home", () => {
  it("renders without crashing", () => {
    const component = shallow(<Home />);
    expect(component.debug()).toMatchSnapshot();
  });
});
