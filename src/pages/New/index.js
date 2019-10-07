import React, { useState } from "react";

import * as S from "./styled";

import { useCatwalkServer } from "../../hooks";
import Form from "../../components/Form";

export default function NewPage({ history }) {
  const [market, setMarket] = useState({ images: [] });

  const { addMarket, uploadFile } = useCatwalkServer();

  const handleNewMarket = async market => {
    const urls = await uploadFile(market.images);

    await addMarket({
      ...market,
      mainImage: urls[0],
      extraImages: urls.slice(1)
    });

    history.push("/");
  };

  const handleCancelForm = () => {
    history.push("/");
  };

  const handleInputEdit = (attrName, attrValue) => {
    setMarket({
      ...market,
      [attrName]: attrValue
    });
  };

  return (
    <S.FormContainer>
      <h2>Register new market</h2>

      <Form
        market={market}
        onInputEdit={handleInputEdit}
        onSecondaryClick={handleCancelForm}
        onPrimaryClick={handleNewMarket}
        name={market.name}
        phone={market.phone}
        street={market.street}
        number={market.number}
        district={market.district}
        zip={market.zip}
        country={market.country}
        city={market.city}
        state={market.state}
        description={market.description}
        images={market.images}
      />
    </S.FormContainer>
  );
}
