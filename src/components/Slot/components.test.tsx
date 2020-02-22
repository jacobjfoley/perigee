import React from "react";
import { render } from "@testing-library/react";

import Slot from "./components";
import { createDrone } from "../../actions";

test("it renders", () => {
  render(<Slot createDrone={createDrone} />);
});
