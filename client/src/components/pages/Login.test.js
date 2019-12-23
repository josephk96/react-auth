import React from "react";
import Login from "./Login";
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

jest.mock('../../utils/avatars.js');

describe("Login", () => {
  it("renders without crashing", () => {
    const component = shallow(<Login />);
    expect(component.debug()).toMatchSnapshot();
  });
});
