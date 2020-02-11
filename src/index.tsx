import React from "react";
import reactDOM from "react-dom";

interface WelcomeProps {}

const Welcome = () => {
  return <h1>Hello, React!</h1>;
};

const container = document.getElementById("app");
reactDOM.render(<Welcome />, container);
