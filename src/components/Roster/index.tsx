import React from "react";
import styled from "styled-components";

import Slot from "../Slot";

interface RosterProps {
  slots: number;
}

const Container = styled.div`
  padding: 2rem;

  div + div {
    margin-top: 1rem;
  }
`;

const Roster = (props: RosterProps) => {
  const slots = [];

  for (let i = 0; i < props.slots; i++) {
    slots.push(<Slot key={i} />);
  }

  return <Container>{...slots}</Container>;
};

export default Roster;
