import React from "react";
import styled from "styled-components";

import Header from "../Header";
import Column from "../UI/Column";
import AppRouter from "../AppRouter";

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const ModalPortal = styled.div``;

const App: React.FunctionComponent = () => {
  return (
    <Container>
      <Header />
      <Column>
        <AppRouter />
      </Column>
      <ModalPortal id="modalPortal" />
    </Container>
  );
};

export default App;
