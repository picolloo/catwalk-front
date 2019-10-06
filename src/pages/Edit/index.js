import React from "react";

import * as S from "./styled";

import { useCatwalkServer } from "../../hooks";
import Form from "../../components/Form";

export default function NewPage({ history }) {
  const { updateMarket } = useCatwalkServer();

  const handleEditMarket = async market => {};

  const handleCancelForm = () => {
    history.push("/");
  };

  return (
    <S.FormContainer>
      <Form
        market={{}}
        onCancel={handleCancelForm}
        onConfirm={handleEditMarket}
      />
    </S.FormContainer>
  );
}
