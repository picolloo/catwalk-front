import React, { useState } from "react";

import Toolbar from "./components/Toolbar";
import Container from "./components/Container";
import CardList from "./components/CardList";
import FormModal from "./components/FormModal";
import { useCatwalkServer } from "./hooks";

function App() {
  const [activeMarket, setActiveMarket] = useState({});
  const [modal, setModal] = useState({ show: false, edit: false });
  const {
    markets,
    getMarket,
    removeMarket,
    updateMarket,
    addMarket
  } = useCatwalkServer();

  const handleFormNewMode = () => {
    setActiveMarket({});
    setModal({ show: true, edit: false });
  };

  const handleFormEditMode = async id => {
    const market = await getMarket(id);
    setActiveMarket(market);

    setModal({ show: true, edit: true });
  };

  const handleNewMarket = async market => {
    await addMarket(market);

    setModal({ ...modal, show: false });
  };

  const handleRemoveMarket = async id => {
    await removeMarket(id);
  };

  const handleEditMarket = async id => {};

  return (
    <div className="App">
      <Toolbar />
      <Container>
        <CardList
          items={markets}
          onNewMarket={handleFormNewMode}
          onEditMarket={handleFormEditMode}
          onRemoveMarket={handleRemoveMarket}
        />

        {modal.show && (
          <FormModal
            market={activeMarket}
            onCancel={() => setModal({ ...modal, show: false })}
            onConfirm={modal.edit ? handleEditMarket : handleNewMarket}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
