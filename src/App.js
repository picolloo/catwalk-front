import React from "react";

import "./App.css";

import Routes from "./routes";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

export default function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes />
      </Container>
    </>
  );
}
