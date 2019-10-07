import React, { useEffect, useState, useMemo } from "react";

import * as S from "./styled";

import { useCatwalkServer } from "../../hooks";

import Form from "../../components/Form";

export default function DetailsPage({
  history,
  match: {
    params: { id }
  }
}) {
  const [market, setMarket] = useState();

  const thumbnails = useMemo(() => {
    const images = market ? [market.mainImage, ...market.extraImages] : [];
    return images;
  }, [market]);

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

  const handleCancelForm = () => {
    history.push("/");
  };

  return (
    <S.FormContainer>
      <h2>Market details</h2>
      {market && (
        <Form
          market={market}
          edit
          onSecondaryClick={handleCancelForm}
          onPrimaryClick={handleEditForm}
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
          images={thumbnails}
        />
      )}
    </S.FormContainer>
  );
}
