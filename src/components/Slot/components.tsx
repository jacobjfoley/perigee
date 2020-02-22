import React from "react";
import styled from "styled-components";
import { createDrone } from "../../actions";

const Container = styled.div`
  border: 2px dashed #444;
  height: 4rem;
  color: #777;
  text-align: center;
  line-height: 4rem;
  cursor: pointer;
`;

interface Props {
  createDrone: typeof createDrone;
}

const Slot: React.FunctionComponent<Props> = (props: Props) => {
  return <Container onClick={props.createDrone}>Create</Container>;
};

export default Slot;
