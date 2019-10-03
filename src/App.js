import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import CardList from "./components/CardList";
import FormModal from "./components/FormModal";
import { useCatwalkServer } from "./hooks";

function App() {
  const [markets, setMarkets] = useState([]);
  const [activeMarket, setActiveMarket] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const {
    getMarkets,
    getMarket,
    removeMarket,
    updateMarket,
    addMarket
  } = useCatwalkServer();

  useEffect(() => {
    const fetchMarkets = async () => setMarkets(await getMarkets());

    fetchMarkets();
  }, []);

  const handleFormNewMode = async () => {
    setActiveMarket({});

    setShowModal(true);
    setEditModal(false);
  };

  const handleFormEditMode = async id => {
    const market = await getMarket(id);
    setActiveMarket(market);

    setEditModal(true);
    setShowModal(true);
  };

  const handleNewMarket = async market => {
    const newMarket = await addMarket(market);

    setMarkets([...markets, newMarket]);

    setShowModal(false);
  };

  const handleRemoveMarket = async id => {
    await removeMarket(id);

    setMarkets(markets.filter(market => market.id !== id));
  };

  const handleEditMarket = async id => {};

  return (
    <div className="App">
      <Navbar />
      <Container>
        <CardList
          items={markets}
          onNewMarket={handleFormNewMode}
          onEditMarket={handleFormEditMode}
          onRemoveMarket={handleRemoveMarket}
        />

        {showModal && (
          <FormModal
            market={activeMarket}
            onCancel={() => setShowModal(false)}
            onConfirm={editModal ? handleEditMarket : handleNewMarket}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
