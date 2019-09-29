import styled from "styled-components";

import { device } from "../../styles";

export const Toolbar = styled.div`
  height: 3rem;
  width: 100%;
  padding: 1em;
  margin: auto;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media ${device.desktop} {
    width: 80%;
  }
`;
