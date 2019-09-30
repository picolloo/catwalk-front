import React from "react";

import * as S from "./styled";

export default function ToolCardItem({ toolName, onClick }) {
  return <S.ToolCardItem onClick={onClick}>{toolName}</S.ToolCardItem>;
}
