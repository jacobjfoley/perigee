import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;

  & > div + div {
    margin-left: 2rem;
  }
`;

const Icon = styled.div`
  font-size: 4rem;
  line-height: 1;
`;

interface HealthProps {
  health: number;
}

const Health = styled.div`
  flex: 1 1 0;
  background-image: ${(props: HealthProps) =>
    css`linear-gradient(90deg, #6f6 ${props.health}%, #222 ${props.health}%)`};
`;

interface ExperienceProps {
  experience: number;
}

const Experience = styled.div`
  flex: 1 1 0;
  background-image: ${(props: ExperienceProps) =>
    css`linear-gradient(90deg, #66f ${props.experience}%, #222 ${props.experience}%)`};
`;

const BarContainer = styled.div`
  height: 60%;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;

  & > div + div {
    margin-top: 0.5rem;
  }
`;

const Level = styled.div`
  font: bold 2rem sans-serif;
  line-height: 1;
`;

const Drone = () => {
  return (
    <Container>
      <Icon>🛰</Icon>
      <BarContainer>
        <Health health={80} />
        <Experience experience={80} />
      </BarContainer>
      <Level>Lvl 12</Level>
    </Container>
  );
};

export default Drone;
