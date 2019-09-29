import React from "react";

import * as S from "./styled";

export default function MarketItem({ name, phone, description }) {
  return (
    <S.MarketItem>
      <S.ImageArea></S.ImageArea>
      <S.PropertiesArea>
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
    </S.MarketItem>
  );
}
