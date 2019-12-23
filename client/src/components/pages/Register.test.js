import React from "react";
import Register from "./Register";
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

describe("Register", () => {
  it("renders without crashing", () => {
    const component = shallow(<Register />);
    expect(component.debug()).toMatchSnapshot();
  });
});
