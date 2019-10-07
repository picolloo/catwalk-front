import React from "react";

import * as S from "./styled";

export default function ToolCardItem({ toolName, onActivate }) {
  return <S.ToolCardItem onClick={onActivate}>{toolName}</S.ToolCardItem>;
}
