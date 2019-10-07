import React from "react";

import * as S from "./styled";

import { useCatwalkServer } from "../../hooks";
import Form from "../../components/Form";

export default function NewPage({ history }) {
  const { addMarket, uploadFile } = useCatwalkServer();

  const handleNewMarket = async market => {
    const mainUrl = await uploadFile(market.mainImage);

    await addMarket({ ...market, mainImage: mainUrl });

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
        onCancel={handleCancelForm}
        onConfirm={handleNewMarket}
      />
    </S.FormContainer>
  );
}
