import React from "react";

import * as S from "./styled";

import { useCatwalkServer } from "../../hooks";

export default function FormModal() {
  return (
    <S.Modal>
      <S.FormContainer>
        <S.Form>
          <S.Input placeholder="Name"></S.Input>

          <S.Input placeholder="Phone"></S.Input>

          <S.TextArea placeholder="Description"></S.TextArea>

          <div>
            <S.CancelButton>Cancel</S.CancelButton>
            <S.SubmitButton>Send</S.SubmitButton>
          </div>
        </S.Form>
      </S.FormContainer>
    </S.Modal>
  );
}
