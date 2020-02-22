import { createReducer } from "@reduxjs/toolkit";

import { DroneStore, DroneStatus } from "../../types";
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
import { generateDrone, generateRemanufacturedDrones } from "./utils";

function createDroneHandler(state: DroneStore): void {
  const entry = generateDrone();
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
  const drone = state[action.payload.id];
  const children = generateRemanufacturedDrones(drone, action.payload.count);
  children.forEach(child => (state[child.id] = child));
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

export default createReducer(
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
