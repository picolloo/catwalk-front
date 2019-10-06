import React, { useState, useEffect } from "react";

import * as S from "./styled";

import { useCatwalkServer } from "../../hooks";
import CardList from "../../components/CardList";
import ToolCardItem from "../../components/ToolCardItem";

export default function HomePage({ history }) {
  const [markets, setMarkets] = useState([]);

  const { getMarkets, removeMarket } = useCatwalkServer();

  useEffect(() => {
    const fetchMarkets = async () => setMarkets(await getMarkets());

    fetchMarkets();
  }, []);

  const handleNewMarket = () => {
    history.push("/new");
    // const mainUrl = await uploadFile(market.mainImage);
    // const newMarket = await addMarket({ ...market, mainImage: mainUrl });
    // if (newMarket) {
    //   setMarkets([...markets, newMarket]);
    // }
  };

  const handleMarketSelect = id => {
    history.push(`/${id}`);
  };

  const handleRemoveMarket = async id => {
    await removeMarket(id);
    setMarkets(markets.filter(market => market._id !== id));
  };

  return (
    <S.HomeContainer>
      <ToolCardItem toolName="New market" onActivate={handleNewMarket} />
      <CardList
        items={markets}
        onClick={handleMarketSelect}
        onDelete={handleRemoveMarket}
      />
    </S.HomeContainer>
  );
}
