import { v4 } from "uuid";
import { createReducer } from "@reduxjs/toolkit";

import { Drone, DroneStatus } from "../../types";
import {
  createDrone,
  storeDrone,
  unstoreDrone,
  scrapDrone,
  remanufactureDrone,
  passTime,
  DroneAction,
  RemanufactureDroneAction
} from "../../actions";

export interface DroneStore {
  [id: string]: Drone;
}

function createDroneHandler(state: DroneStore): void {
  const entry = {
    id: v4(),
    status: DroneStatus.ACTIVE
  };
  state[entry.id] = entry;
}

function storeDroneHandler(state: DroneStore, action: DroneAction): void {
  state[action.payload].status = DroneStatus.STORED;
}

function unstoreDroneHandler(state: DroneStore, action: DroneAction): void {
  state[action.payload].status = DroneStatus.ACTIVE;
}

function scrapDroneHandler(state: DroneStore, action: DroneAction): void {
  state[action.payload].status = DroneStatus.SCRAPPED;
}

function remanufactureDroneHandler(
  state: DroneStore,
  action: RemanufactureDroneAction
): void {
  // Insert remanufactured drones.
  for (let i = 0; i < action.payload.count; i++) {
    const entry = {
      id: v4(),
      status: DroneStatus.ACTIVE
    };
    state[entry.id] = entry;
  }

  // Remove original drone.
  delete state[action.payload.id];
}

function timePassesHander(): void {
  return;
}

// function encounterScrapHandler(state, action) {}

// function encounterDebrisHandler(state, action) {}

// function encounterRockyDebrisHandler(state, action) {}

// function encounterSatelliteHandler(state, action) {}

// function encounterMeteoroidHandler(state, action) {}

// function encounterIcyMeteoroidHandler(state, action) {}

// function encounterAsteroidHandler(state, action) {}

// function encounterIcyAsteroidHandler(state, action) {}

const reducer = createReducer(
  {},
  {
    [createDrone.type]: createDroneHandler,
    [storeDrone.type]: storeDroneHandler,
    [unstoreDrone.type]: unstoreDroneHandler,
    [scrapDrone.type]: scrapDroneHandler,
    [remanufactureDrone.type]: remanufactureDroneHandler,
    [passTime.type]: timePassesHander
  }
);

export default reducer;
