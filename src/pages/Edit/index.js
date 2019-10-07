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

  const handleInputEdit = (attrName, attrValue) => {
    setMarket({
      ...market,
      [attrName]: attrValue
    });
  };

  return (
    <S.FormContainer>
      <h1>Edit market</h1>
      {market && (
        <Form
          market={market}
          onInputEdit={handleInputEdit}
          onSecondaryClick={handleCancelForm}
          onPrimaryClick={handleEditMarket}
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
          images={market ? [market.mainImage, ...market.extraImages] : []}
        />
      )}
    </S.FormContainer>
  );
}
