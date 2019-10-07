import React, { useEffect, useState } from "react";

import * as S from "./styled";

import { useCatwalkServer } from "../../hooks";

import Form from "../../components/Form";

export default function DetailsPage({
  history,
  match: {
    params: { id }
  }
}) {
  const [market, setMarket] = useState({});

  const { getMarket } = useCatwalkServer();

  useEffect(() => {
    const fetchMarket = async id => {
      const market = await getMarket(id);
      setMarket(market);
    };

    fetchMarket(id);
  }, [id]);

  const handleEditForm = () => {
    history.push(`/edit/${id}`);
  };

  return (
    <S.FormContainer>
      <h2>Market details</h2>
      <Form market={market} edit onEdit={handleEditForm} />
    </S.FormContainer>
  );
}
