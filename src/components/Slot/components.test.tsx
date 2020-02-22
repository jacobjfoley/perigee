import React from "react";
import { render } from "@testing-library/react";

import Slot from "./components";

test("it renders", () => {
  const noop = (): void => {
    return;
  };

  render(<Slot createDrone={noop} />);
});
