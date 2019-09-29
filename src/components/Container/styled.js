import styled from "styled-components";

import { device } from "../../styles";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  @media ${device.desktop} {
    width: 80%;
  }
`;
