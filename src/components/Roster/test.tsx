import React from "react";
import { render } from "@testing-library/react";

import Roster from "./index";

test("it renders", () => {
  render(<Roster slots={12} />);
});
