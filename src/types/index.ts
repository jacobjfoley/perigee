export enum DroneStatus {
  ACTIVE = "ACTIVE",
  STORED = "STORED",
  DESTROYED = "DESTROYED",
  SCRAPPED = "SCRAPPED"
}

export interface Drone {
  id: string;
  serialNumber: string;
  createdAt: number;
  status: DroneStatus;
  experience: number;
  health: number;
  durability: number;
  mining: number;
  welding: number;
  cutting: number;
}
