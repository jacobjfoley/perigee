import {
  generateHex,
  generateSerialNumber,
  generateDrone,
  calculateStat,
  deriveStats,
  generateRemanufacturedDrones,
  mutateSerialNumber
} from "./utils";

describe("Drone reducer utils", () => {
  test("generateHex", () => {
    const hex = generateHex();
    expect(hex).toMatch(/[a-f0-9]{1}/);
  });

  // Serial numbers are 32-digit hexadecimal numbers.
  test("generateSerialNumber", () => {
    const serial = generateSerialNumber();
    expect(serial).toMatch(/[0-9a-f]{32}/);
  });

  test("generateDrone", () => {
    const drone = generateDrone();
    expect(Object.keys(drone).length).toEqual(10);
    expect(drone).toHaveProperty("id");
    expect(drone).toHaveProperty("createdAt");
    expect(drone).toHaveProperty("serialNumber");
    expect(drone).toHaveProperty("cutting");
    expect(drone).toHaveProperty("mining");
    expect(drone).toHaveProperty("durability");
    expect(drone).toHaveProperty("welding");
    expect(drone).toHaveProperty("health");
    expect(drone).toHaveProperty("experience");
    expect(drone).toHaveProperty("status");
  });

  test("calculateStat", () => {
    const stat = calculateStat("af");
    expect(stat < 1 && stat >= 0).toBeTruthy();
  });

  test("deriveStats", () => {
    const stats = deriveStats("481851f8819322e4c6ff2ec8a5a55fcf");
    expect(Object.keys(stats).length).toEqual(4);
    expect(stats).toHaveProperty("durability");
    expect(stats).toHaveProperty("welding");
    expect(stats).toHaveProperty("mining");
    expect(stats).toHaveProperty("cutting");
  });

  test("mutateSerialNumber", () => {
    const random = Math.random;
    Math.random = (): number => 0.1;
    const serialNumber = "b3126ff0b2f33686832e17b13c3536bb";
    expect(mutateSerialNumber(serialNumber)).not.toEqual(
      "b3126ff0b2f33686832e17b13c3536bb"
    );
    Math.random = random;
  });

  test("generateRemanufacturedDrones", () => {
    const drone = generateDrone();
    const CHILD_COUNT = 3;
    const children = generateRemanufacturedDrones(drone, CHILD_COUNT);
    expect(children.length).toEqual(CHILD_COUNT);
  });
});
