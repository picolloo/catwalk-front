import React from "react";

import FormModal from "../../components/FormModal";

export default function FormPage({ onConfirm, onCancel }) {
  return <FormModal onCancel={onCancel} onConfirm={onConfirm} />;
}
