import React from "react";

import * as S from "./styled";

import CardImage from "../CardImage";

export default function MarketItem({ name, phone, description, onClick }) {
  return (
    <S.CardItem onClick={onClick}>
      <S.ImageArea>
        <CardImage src={""} />
      </S.ImageArea>

      <S.PropertiesArea>
        {/* <S.DeleteButton>X</S.DeleteButton> */}

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
