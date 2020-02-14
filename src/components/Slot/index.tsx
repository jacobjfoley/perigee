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

const Slot = () => {
  return <Container>Create</Container>;
};

export default Slot;
