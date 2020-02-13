import React from "react";
import styled from "styled-components";

const Container = styled.header`
  padding: 1rem;
  background-color: #333;
  display: flex;
`;

const Title = styled.div`
  flex: 1 1;
`;

const GitHub = styled.a``;

const GitHubIcon = styled.img``;

const Spotify = styled.a``;

const SpotifyIcon = styled.img``;

const Website = styled.a``;

const WebsiteIcon = styled.img``;

const About = styled.div``;

const Header = () => {
  return (
    <Container>
      <Title>Perigee</Title>
      <GitHub>
        <GitHubIcon />
        GitHub
      </GitHub>
      <Spotify>
        <SpotifyIcon />
        Spotify
      </Spotify>
      <Website>
        <WebsiteIcon />
        Website
      </Website>
      <About>?</About>
    </Container>
  );
};

export default Header;
