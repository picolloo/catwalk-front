import React from "react";

import * as S from "./styled";

import { useCatwalkServer } from "../../hooks";
import Form from "../../components/Form";

export default function NewPage({ history }) {
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

  return (
    <S.FormContainer>
      <h2>Register new market</h2>
      <Form
        market={{}}
        onSecondaryClick={handleCancelForm}
        onPrimaryClick={handleNewMarket}
      />
    </S.FormContainer>
  );
}
