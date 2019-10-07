import React, { useEffect, useState } from "react";

import * as S from "./styled";

import { useCatwalkServer } from "../../hooks";
import Form from "../../components/Form";

export default function EditPage({
  history,
  match: {
    params: { id }
  }
}) {
  const [market, setMarket] = useState();

  const { getMarket, updateMarket } = useCatwalkServer();

  useEffect(() => {
    const fetchMarket = async id => {
      setMarket(await getMarket(id));
    };

    fetchMarket(id);
  }, [id]);

  const handleEditMarket = async market => {};

  const handleCancelForm = () => {
    history.push("/");
  };

  return (
    <S.FormContainer>
      <h1>Edit market</h1>
      <Form
        market={{}}
        onCancel={handleCancelForm}
        onConfirm={handleEditMarket}
      />
    </S.FormContainer>
  );
}
