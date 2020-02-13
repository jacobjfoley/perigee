import React from "react";
import styled from "styled-components";

import Header from "../Header";
import Column from "../UI/Column";
import AppRouter from "../AppRouter";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <Column>
        <AppRouter />
      </Column>
    </Container>
  );
};

export default App;
