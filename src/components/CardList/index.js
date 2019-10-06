import React from "react";

import * as S from "./styled";

import CardItem from "../CardItem";

export default function CardList({ items, onClick, onDelete }) {
  return (
    <S.CardList>
      {items.map(item => (
        <CardItem
          key={item._id}
          name={item.name}
          phone={item.phone}
          description={item.description}
          image={item.mainImage}
          onClick={() => onClick(item._id)}
          onDelete={() => onDelete(item._id)}
        />
      ))}
    </S.CardList>
  );
}
