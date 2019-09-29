import styled from "styled-components";

import { device } from "../../styles";

export const Toolbar = styled.div`
  height: 3rem;
  width: 100%;
  padding: 1em;
  margin: auto;
  background: #171717;
  color: #fff;

  @media ${device.desktop} {
    width: 80%;
  }
`;
