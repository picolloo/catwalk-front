import styled from "styled-components";

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  height: 100%;
  width: 100%;

  & > * {
    margin-bottom: 1em;
  }
`;
