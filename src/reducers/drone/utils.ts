import { v4 } from "uuid";

import { Drone, DroneStatus } from "../../types";

const SERIAL_NUMBER_LENGTH = 32;

const GENE_LENGTH = 2;
const DURABILITY_POSITION = 2;
const WELDING_POSITION = 7;
const MINING_POSITION = 21;
const CUTTING_POSITION = 29;
const MUTATION_CHANCE = 0.15;

interface DroneStats {
  durability: number;
  welding: number;
  mining: number;
  cutting: number;
}

// Generate a random hexadecimal number.
export function generateHex(): string {
  const number = Math.floor(Math.random() * 16);
  return number.toString(16);
}

// Generate a random hexadecimal of 32 digits.
export function generateSerialNumber(): string {
  const serial = [];
  for (let i = 0; i < SERIAL_NUMBER_LENGTH; i++) {
    serial.push(generateHex());
  }
  return serial.join("");
}

// Return a calculated stat from 0 to 1.0.
export function calculateStat(hex: string): number {
  const number = parseInt(hex, 16);
  return number / 255;
}

// Derive a drone's stats from a serial number.
export function deriveStats(serialNumber: string): DroneStats {
  const durabilityHex = serialNumber.slice(
    DURABILITY_POSITION,
    DURABILITY_POSITION + GENE_LENGTH
  );
  const weldingHex = serialNumber.slice(
    WELDING_POSITION,
    WELDING_POSITION + GENE_LENGTH
  );
  const miningHex = serialNumber.slice(
    MINING_POSITION,
    MINING_POSITION + GENE_LENGTH
  );
  const cuttingHex = serialNumber.slice(
    CUTTING_POSITION,
    CUTTING_POSITION + GENE_LENGTH
  );
  return {
    durability: calculateStat(durabilityHex),
    welding: calculateStat(weldingHex),
    mining: calculateStat(miningHex),
    cutting: calculateStat(cuttingHex)
  };
}

// Generate a drone.
export function generateDrone(fixedSerialNumber?: string): Drone {
  const serialNumber = fixedSerialNumber || generateSerialNumber();
  const stats = deriveStats(serialNumber);
  const entry = {
    id: v4(),
    serialNumber,
    createdAt: Date.now(),
    status: DroneStatus.ACTIVE,
    experience: 0,
    health: 100,
    ...stats
  };
  return entry;
}

// Mutate a serial number.
export function mutateSerialNumber(serialNumber: string): string {
  const genes = Array.from(serialNumber);
  const newGenes = genes.map(gene => {
    const chance = Math.random();
    if (chance < MUTATION_CHANCE) {
      return generateHex();
    } else {
      return gene;
    }
  });
  return newGenes.join("");
}

// Remanufacture a drone into several new drones.
export function generateRemanufacturedDrones(
  drone: Drone,
  count: number
): Drone[] {
  const children = [];
  for (let i = 0; i < count; i++) {
    children.push(generateDrone(mutateSerialNumber(drone.serialNumber)));
  }
  return children;
}
