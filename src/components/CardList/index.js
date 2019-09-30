import React from "react";

import * as S from "./styled";

import CardItem from "../CardItem";
import ToolCardItem from "../ToolCardItem";

export default function CardList({
  items,
  onNewMarket,
  onEditMarket,
  onRemoveMarket
}) {
  return (
    <S.CardList>
      <ToolCardItem toolName="New market" onClick={onNewMarket} />

      {items.map(item => (
        <CardItem
          key={item._id}
          name={item.name}
          phone={item.phone}
          description={item.description}
          image={item.mainImage}
          extraImages={item.extraImages}
          onClick={() => onEditMarket(item._id)}
          onDelete={() => onRemoveMarket(item._id)}
        />
      ))}
    </S.CardList>
  );
}
