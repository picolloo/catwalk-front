import React, { useState } from "react";

import Toolbar from "./components/Toolbar";
import Container from "./components/Container";
import CardList from "./components/CardList";
import FormModal from "./components/FormModal";

function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="App">
      <Toolbar />
      <Container>
        {showModal && <FormModal />}
        <CardList />
      </Container>
    </div>
  );
}

export default App;
