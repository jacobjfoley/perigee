import React, { useState } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { Drone } from "../../types";
import Modal from "../UI/Modal";

const Container = styled.div`
  border: 2px solid #444;
  padding: 0.5rem 3rem;
  height: 6rem;
  display: flex;
  align-items: center;
  cursor: pointer;

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
  background-image: ${(props: HealthProps): FlattenSimpleInterpolation =>
    css`linear-gradient(90deg, #6f6 ${props.health}%, #222 ${props.health}%)`};
`;

interface ExperienceProps {
  experience: number;
}

const Experience = styled.div`
  flex: 1 1 0;
  background-image: ${(props: ExperienceProps): FlattenSimpleInterpolation =>
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
  font: bold 1.6rem sans-serif;
  line-height: 1;
`;

const PER_LEVEL = 1000;

export interface Props {
  drone: Drone;
}

const DroneSummary: React.FunctionComponent<Props> = (props: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const healthPercent = props.drone.health;
  const experiencePercent = (props.drone.experience % PER_LEVEL) / 10;
  const level = Math.floor(props.drone.experience / PER_LEVEL);

  return (
    <>
      <Container onClick={(): void => setModalOpen(true)}>
        <Icon>🛰</Icon>
        <BarContainer>
          <Health health={healthPercent} />
          <Experience experience={experiencePercent} />
        </BarContainer>
        <Level>Lvl {Math.floor(level)}</Level>
      </Container>
      {isModalOpen && <Modal onClose={(): void => setModalOpen(false)} />}
    </>
  );
};

export default DroneSummary;
