import styled from "styled-components";

import { device } from "../../styles";

export const Navbar = styled.div`
  height: 3rem;
  width: 100%;
  padding: 1em;
  margin: auto;
  background: #171717;
  color: #fff;
  cursor: default;

  @media ${device.desktop} {
    width: 80%;
  }
`;
