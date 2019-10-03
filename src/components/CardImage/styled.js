import styled from "styled-components";

import { device } from "../../styles";

export const CardImage = styled.img`
  width: 100%;
  border-radius: 10px;

  @media ${device.tablet} {
    width: 90%;
  }
`;
