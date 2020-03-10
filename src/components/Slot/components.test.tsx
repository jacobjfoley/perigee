import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";

import Slot from "./components";
import { createDrone } from "../../actions";

type CreateDrone = typeof createDrone;

interface MockedCreateDrone extends CreateDrone {
  mock: {
    calls: {
      length: number;
    };
  };
}

test("it renders", () => {
  const mock: MockedCreateDrone = Object.assign(jest.fn(), createDrone);
  render(<Slot createDrone={mock} />);
  const button = screen.getByText(/Create/i);
  fireEvent.click(button);
  expect(mock.mock.calls.length).toBe(1);
});

test("matches snapshot", () => {
  const mock: MockedCreateDrone = Object.assign(jest.fn(), createDrone);
  const component = renderer.create(<Slot createDrone={mock} />).toJSON();
  expect(component).toMatchSnapshot();
});
