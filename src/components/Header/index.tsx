import React from "react";
import styled from "styled-components";

const Container = styled.header`
  padding: 1.2rem 2.4rem;
  background-color: #323232;
  border: 2px solid #444;
  border-width: 0 0 2px;
  display: flex;
  align-items: center;

  a + a {
    margin-left: 1.6rem;
  }
`;

const Title = styled.div`
  flex: 1 1 auto;
  font: bold 2.6rem "Courgette", sans-serif;
`;

const GitHubIcon = styled.img`
  width: 1.8rem;
  filter: invert();
`;

const SpotifyIcon = styled.img`
  width: 1.8rem;
`;

const Website = styled.a`
  color: #fff;
  font: bold 1.8rem "Courgette", sans-serif;
  text-decoration: none;
  cursor: pointer;
`;

const About = styled.a`
  font: bold 1.8rem "Courgette", sans-serif;
  cursor: pointer;
`;

const Header: React.FunctionComponent = () => {
  return (
    <Container>
      <Title>Perigee</Title>
      <a href="https://open.spotify.com/playlist/5tttPAXRMPkJqdc8FnJZH3">
        <SpotifyIcon src="/img/spotify.png" />
      </a>
      <a href="https://github.com/jacobjfoley/perigee">
        <GitHubIcon src="/img/github.png" />
      </a>
      <Website href="https://www.jacobjfoley.com/">JF</Website>
      <About>ⓘ</About>
    </Container>
  );
};

export default Header;
