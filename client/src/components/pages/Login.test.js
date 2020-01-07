import React from "react";
import Login from "./Login";
import { shallow, mount } from "enzyme";

jest.mock("react", () => {
  const ActualReact = require.requireActual("react");
  return {
    ...ActualReact,
    useContext: () => ({
      authContext: {}
    })
  };
});

jest.mock('../../utils/avatars.js')

describe("Login", () => {
  const component = shallow(<Login />);

  it("renders without crashing", () => {
    expect(component.debug()).toMatchSnapshot();
  });

  it("should have a submit button", () => {
    expect(component.find("#submitButton")).toHaveLength(1);
  });

  it("should have an email input", () => {
    expect(component.find("#email")).toHaveLength(1);
  });

  it("should have a password input", () => {
    expect(component.find("#password")).toHaveLength(1);
  });

  it('should have 2 CreditLink a tags', () => {
    expect(component.find('CreditLink')).toHaveLength(2);
  });

  it('should have an avatar', () => {
    expect(component.find('#avatar')).toHaveLength(1);
  });
});

