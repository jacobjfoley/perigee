import { createAction } from "@reduxjs/toolkit";

export interface DroneAction {
  type: string;
  payload: string;
}

export interface RemanufactureDronePayload {
  id: string;
  count: number;
}

export interface RemanufactureDroneAction {
  type: string;
  payload: RemanufactureDronePayload;
}

export const createDrone = createAction("DRONE_CREATED");
export const storeDrone = createAction<string>("DRONE_STORED");
export const unstoreDrone = createAction<string>("DRONE_UNSTORED");
export const scrapDrone = createAction<string>("DRONE_SCRAPPED");
export const remanufactureDrone = createAction<RemanufactureDronePayload>(
  "DRONE_REMANUFACTURED"
);

export const passTime = createAction("TIME_PASSES");

export const encounterScrap = createAction("SCRAP_ENCOUNTERED");
export const encounterDebris = createAction("DEBRIS_ENCOUNTERED");
export const encounterRockyDebris = createAction("ROCKY_DEBRIS_ENCOUNTERED");
export const encounterSatellite = createAction("SATELLITE_ENCOUNTERED");
export const encounterMeteoroid = createAction("METEOROID_ENCOUNTERED");
export const encounterIcyMeteoroid = createAction("ICY_METEOROID_ENCOUNTERED");
export const encounterAsteroid = createAction("ASTEROID_ENCOUNTERED");
export const encounterIcyAsteroid = createAction("ICY_ASTEROID_ENCOUNTERED");
