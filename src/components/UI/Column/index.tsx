import React from "react";
import styled from "styled-components";

interface ColumnProps {
  children?: JSX.Element;
}

const Container = styled.div`
  margin: 0 auto;
  width: 72rem;
  height: 100%;
`;

const Column = (props: ColumnProps) => {
  return <Container>{props.children}</Container>;
};

export default Column;
