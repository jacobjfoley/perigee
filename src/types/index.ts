export enum DroneStatus {
  ACTIVE = "ACTIVE",
  STORED = "STORED",
  DESTROYED = "DESTROYED",
  SCRAPPED = "SCRAPPED"
}

export interface Drone {
  id: string;
  status: DroneStatus;
}
