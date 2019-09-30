import styled from "styled-components";

import { device } from "../../styles";

export const CardItem = styled.div`
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
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  color: #1d2222;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.2s ease-in-out;
  }

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
  position: relative;
`;

export const PropertieLabel = styled.span`
  color: rgba(0, 0, 0, 0.3);
  font-size: 0.8em;
  margin-right: 1em;
`;

export const PropertiesRow = styled.div`
  margin: 0.4em 0;
`;

export const DeleteButton = styled.button`
  text-decoration: none;
  position: absolute;
  right: 10px;
  top: 5px;
  background: #171717;
  color: #fff;
  border: none;
  padding: 0.5em;
  border-radius: 5px;
`;
