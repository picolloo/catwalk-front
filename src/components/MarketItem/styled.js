import styled from "styled-components";

import { device } from "../../styles";

export const MarketItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "image properties"
    "image properties";

  max-width: 35rem;
  width: 100%;
  background: #fff;
  padding: 0.5em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;

  @media ${device.desktop} {
    grid-template-columns: 1.5fr 4.5fr;
  }
`;

export const ImageArea = styled.section`
  grid-area: image;
`;

export const PropertiesArea = styled.section`
  grid-area: properties;
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.7);
`;

export const PropertieLabel = styled.span`
  color: rgba(0, 0, 0, 0.3);
  font-size: 0.8em;
  margin-right: 1em;
`;

export const PropertiesRow = styled.div`
  margin: 0.4em 0;
`;
