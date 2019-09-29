import React from "react";

import * as S from "./styled";

import MarketItem from "../MarketItem";

export default function MarketList() {
  return (
    <S.MarketList>
      <MarketItem
        id={1}
        name="Walmart"
        phone={32569836}
        description={"Hueheuheuehueuhe"}
      />
    </S.MarketList>
  );
}
