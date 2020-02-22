import React from "react";
import styled from "styled-components";

interface Props {
  children?: JSX.Element;
}

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 32rem;
  max-width: 64rem;
  height: 100%;
`;

const Column: React.FunctionComponent<Props> = (props: Props) => {
  return <Container>{props.children}</Container>;
};

export default Column;
