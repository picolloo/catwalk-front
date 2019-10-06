import React from "react";

import { useCatwalkServer } from "../../hooks";
import FormModal from "../../components/FormModal";

export default function NewPage({ history }) {
  const { updateMarket } = useCatwalkServer();

  const handleEditMarket = async market => {};

  const handleCancelForm = () => {
    history.push("/");
  };

  return <FormModal onCancel={handleCancelForm} onConfirm={handleEditMarket} />;
}
