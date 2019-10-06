import styled from "styled-components";

import { device } from "../../styles";

export const CardImage = styled.img`
  width: 100%;
  max-heigth: 110px;
  object-fit: contain;
  max-height: 100px;
  border-radius: 10px;

  @media ${device.tablet} {
    width: 90%;
  }
`;
