import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 2px dashed #444;
  height: 4rem;
  color: #777;
  text-align: center;
  line-height: 4rem;
  cursor: pointer;
`;

interface Props {
  createDrone: any;
}

const Slot: React.FunctionComponent<Props> = (props: Props) => {
  return <Container onClick={props.createDrone}>Create</Container>;
};

export default Slot;
