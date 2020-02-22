import { Drone, DroneStatus, DroneStore } from "../../types";
import {
  createDrone,
  storeDrone,
  unstoreDrone,
  scrapDrone,
  remanufactureDrone,
  passTime
} from "../../actions";
import reducer from "./index";

let defaultState: DroneStore;

describe("Drone reducer", () => {
  beforeAll(() => {
    defaultState = reducer(undefined, { type: undefined });
  });

  test("createDrone", () => {
    const state = reducer(defaultState, createDrone());
    expect(Object.keys(state)).toHaveLength(1);
  });

  test("storeDrone", () => {
    // Initialise state to a single active drone.
    let state: DroneStore = reducer(defaultState, createDrone());
    let drone: Drone = Object.values(state)[0];

    // Store the drone.
    state = reducer(state, storeDrone(drone.id));

    // Check that the drone's status is stored.
    drone = state[drone.id];
    expect(drone.status).toEqual(DroneStatus.STORED);
  });

  test("unstoreDrone", () => {
    // Initialise state to a single stored drone.
    let state: DroneStore = reducer(defaultState, createDrone());
    let drone: Drone = Object.values(state)[0];
    state = reducer(state, storeDrone(drone.id));

    // Unstore the drone.
    state = reducer(state, unstoreDrone(drone.id));

    // Check that the drone's status is active.
    drone = state[drone.id];
    expect(drone.status).toEqual(DroneStatus.ACTIVE);
  });

  test("scrapDrone", () => {
    // Initialise state to a single active drone.
    let state: DroneStore = reducer(defaultState, createDrone());
    let drone: Drone = Object.values(state)[0];

    // Scrap the drone.
    state = reducer(state, scrapDrone(drone.id));

    // Check that the drone's status is scrapped.
    drone = state[drone.id];
    expect(drone.status).toEqual(DroneStatus.SCRAPPED);
  });

  test("remanufactureDrone", () => {
    // Initialise state to a single active drone.
    let state: DroneStore = reducer(defaultState, createDrone());
    const drone: Drone = Object.values(state)[0];

    // Remanufacture the drone.
    const createdDrones = 3;
    state = reducer(
      state,
      remanufactureDrone({ id: drone.id, count: createdDrones })
    );

    // Check that we now have new drones and the old drone is removed.
    expect(Object.keys(state).length).toEqual(createdDrones);
    expect(state[drone.id]).toBeUndefined();
  });

  test("timePasses", () => {
    // Initialise state to a single active drone.
    let state: DroneStore = reducer(defaultState, createDrone());
    const drone: Drone = Object.values(state)[0];

    // Pass time.
    state = reducer(state, passTime());

    // Check that the drone hasn't changed.
    expect(drone).toBe(state[drone.id]);
  });
});
