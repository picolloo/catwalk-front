import React from "react";

import Toolbar from "./components/Toolbar";
import Container from "./components/Container";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Container>
        <CardList />
      </Container>
    </div>
  );
}

export default App;
