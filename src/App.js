import React from "react";

import Hero from "./components/Hero";
import Toolbar from "./components/Toolbar";
import Container from "./components/Container";
import MarketList from "./components/MarketList";

function App() {
  return (
    <div className="App">
      <Hero />
      <Toolbar />
      <Container>
        <MarketList />
      </Container>
    </div>
  );
}

export default App;
