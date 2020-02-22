import React from "react";
import styled from "styled-components";

import Roster from "../Roster";

const Container = styled.div`
  height: 100%;
  background-color: #2a2a2a;
`;

const AppRouter: React.FunctionComponent = () => {
  return (
    <Container>
      <Roster />
    </Container>
  );
};

export default AppRouter;
