import React from "react";
import styled from "styled-components";

const Container = styled.header`
  padding: 1rem;
  background-color: #333;
  display: flex;

  a + a {
    margin-left: 1.6rem;
  }
`;

const Title = styled.div`
  flex: 1 1;
  font: bold 2rem sans-serif;
`;

const GitHubIcon = styled.img`
  width: 2rem;
  filter: invert();
`;

const SpotifyIcon = styled.img`
  width: 2rem;
`;

const Website = styled.a`
  color: #fff;
  font: bold 2rem "Courgette";
  line-height: 2rem;
  text-decoration: none;
  cursor: pointer;
`;

const About = styled.a`
  font: bold 2rem "Courgette";
  line-height: 2rem;
  cursor: pointer;
`;

const Header = () => {
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
