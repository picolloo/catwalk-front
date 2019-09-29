import React from "react";

import * as S from "./styled";

import CardItem from "../CardItem";

export default function CardList() {
  return (
    <S.CardList>
      <CardItem
        name="Walmart"
        phone={32569836}
        description={"Hueheuheuehueuhe"}
      />
    </S.CardList>
  );
}
