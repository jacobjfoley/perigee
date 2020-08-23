# Perigee

## Introduction

Perigee is a near-future space salvage game.

As the director of a Perigee station, you are responsible for clearing up space junk in Earth's low orbit. To accomplish this, you have a small workshop and hangar bay for drones which can salvage nearby space junk.

Your drones are built using an evolutionary algorithm and will have various strengths and weaknesses which will become apparent over time. A drone can be remanufactured in your workshop to split it into several new drones with similar, but not identical, properties. Drones can also be scrapped to free up space in your hangar. High-performing drones will help work go significantly faster!

## Installation

- Git clone this repository.
- `npm i` to install dependencies.

## Development

- `npm start` will serve development files.
- `npm run build` to compile files.
- `npm run clean` will remove generated files.

## Deployment

- `npm run deploy` will build and copy files to AWS S3.

## Design

Perigee is managed by three main panels. Station, Roster and Assignments.

- The Station screen shows the inventory and upgrades available to the Perigee station.
- The Roster shows all drones that are either active, stored or in the scrap heap.
- The Assignments shows whether active drones are at the station or in a local orbit.

### Station

The hangar can be upgraded to provide more space. Each upgrade provides one more slot (1 - 24).
The hangar can be upgraded to gain additional slots to storage
The hangar can be upgraded to gain additional slots to scrapheap.

The station can be upgraded with a greenhouse, lounge and structure. This improves the description of the station.

The workshop can be upgraded to manufacture drones faster.
The workshop can be upgraded to repair drones faster.
The workshop can be upgraded to remanufacture drones into 3, 4 or 5 new drones.
The workshop can be upgraded to provide drones with initial experience levels (0 - 5000).
The workshop can be upgraded to allow a scrapped drone to be remanufactured.

A manufacturing centre can be constructed to open new upgrades.
A refinery can process metal ore into scrap metal.
An assembly line can slowly produce parts from scrap metal.
Upgraded drills and grinders and chassis can be researched, giving new probes a boost to those stats.
High-tier components can be created here.

The control hub can be upgraded to allow access to further orbits.
The control hub can be upgraded to automatically recall drones which are heavily damaged.
The control hub can be upgraded to automatically move drones into orbit once repaired.

A new Perigee station can be constructed to open new upgrades.
Perigee II can simulate generations of drones and send a current generation model.

Resource types include:

- Scrap metal.
- Metal ore.
- Components.
- Electronics.
- Solar panels.
- Batteries.
