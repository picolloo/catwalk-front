import React from "react";

import * as S from "./styled";

import CardItem from "../CardItem";
import { useCatwalkServer } from "../../hooks";

export default function CardList() {
  const [error, loading, markets] = useCatwalkServer();

  return (
    <div>
      {error && <span>{error}</span>}
      {loading && <span>{loading}</span>}
      {markets && (
        <S.CardList>
          {markets.map(market => (
            <CardItem
              key={market._id}
              name={market.name}
              phone={market.phone}
              description={market.description}
              image={market.mainImage}
              extraImages={market.extraImages}
            />
          ))}
        </S.CardList>
      )}
    </div>
  );
}
