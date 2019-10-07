import React from "react";

import * as S from "./styled";

export default function MarketItem({
  name,
  phone,
  description,
  image,
  onClick,
  onDelete
}) {
  const handleDeleteEvent = e => {
    e.stopPropagation();

    onDelete();
  };

  return (
    <S.CardItem onClick={onClick}>
      <S.ImageArea>
        <section style={{ backgroundImage: `url(${image})` }} />
      </S.ImageArea>

      <S.PropertiesArea>
        <S.DeleteButton onClick={handleDeleteEvent}>X</S.DeleteButton>

        <S.PropertiesRow>
          <S.PropertieLabel>Name:</S.PropertieLabel>
          <span>{name}</span>
        </S.PropertiesRow>

        <S.PropertiesRow>
          <S.PropertieLabel>Phone:</S.PropertieLabel>
          <span>{phone}</span>
        </S.PropertiesRow>

        <S.PropertiesRow>
          <S.PropertieLabel>Description:</S.PropertieLabel>
          <span>{description}</span>
        </S.PropertiesRow>
      </S.PropertiesArea>
    </S.CardItem>
  );
}
