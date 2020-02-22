import React from "react";
import { render } from "@testing-library/react";

import { DroneStatus } from "../../types";
import Drone from "./components";

test("it renders", () => {
  const drone = {
    id: "foo",
    serialNumber: "foo",
    createdAt: Date.now(),
    status: DroneStatus.ACTIVE,
    experience: 0,
    health: 100,
    durability: 0.5,
    mining: 0.5,
    welding: 0.5,
    cutting: 0.5
  };

  render(<Drone drone={drone} />);
});
