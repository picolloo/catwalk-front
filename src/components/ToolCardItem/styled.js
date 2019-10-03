import styled from "styled-components";

export const ToolCardItem = styled.div`
  max-width: 35rem;
  width: 100%;
  height: 3em;
  padding: 0.5em;
  background: #ddd;
  outline: 1px dashed #171717;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &focus {
    color: #fff;
    background: #171717;
    border: 1px solid #171717;
    outline: none;

    transition: background 0.2s ease-in-out;
  }
`;
