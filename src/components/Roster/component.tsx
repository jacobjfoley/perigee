import React from "react";
import styled from "styled-components";

import Slot from "../Slot";
import Drone from "../DroneSummary";

export interface Props {
  slots: number;
  droneIds: string[];
}

const Container = styled.div`
  padding: 2rem;

  & > div + div {
    margin-top: 1rem;
  }
`;

const Roster: React.FunctionComponent<Props> = (props: Props) => {
  const drones = props.droneIds.map(id => <Drone key={id} id={id} />);

  const freeSlots = props.slots - props.droneIds.length;
  const slots = [];
  for (let i = 0; i < freeSlots; i++) {
    slots.push(<Slot key={i} />);
  }

  return (
    <Container>
      {...drones}
      {...slots}
    </Container>
  );
};

export default Roster;
