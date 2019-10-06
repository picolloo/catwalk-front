import React from "react";

import { useCatwalkServer } from "../../hooks";
import FormModal from "../../components/FormModal";

export default function NewPage({ history }) {
  const { addMarket, uploadFile } = useCatwalkServer();

  const handleNewMarket = async market => {
    const mainUrl = await uploadFile(market.mainImage);
    await addMarket({ ...market, mainImage: mainUrl });
  };

  const handleCancelForm = () => {
    history.push("/");
  };

  return <FormModal onCancel={handleCancelForm} onConfirm={handleNewMarket} />;
}
