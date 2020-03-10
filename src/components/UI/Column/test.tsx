import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import Column from "./index";

test("it renders", () => {
  render(<Column />);
});

test("matches snapshot", () => {
  const component = renderer.create(<Column />).toJSON();
  expect(component).toMatchSnapshot();
});
