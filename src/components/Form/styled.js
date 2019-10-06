import styled from "styled-components";

export const Form = styled.form`
  max-width: 25em;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1em;

  color: #444;
`;

export const Input = styled.input`
  padding: 0.5em;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  margin: 1em auto 10px;
  width: 100%;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:hover {
    border-bottom: 1px solid #171717;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  margin: 0;
  width: 100%;
  align-items: center;

  > label {
    color: #999;
    margin-right: 1em;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  overflow-x: hidden;
  outline: none;
  padding: 0.5em;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  margin: 0 auto 2em;
  width: 100%;

  &:hover {
    border-bottom: 1px solid #171717;
  }
`;

export const SubmitButton = styled.a`
  cursor: pointer;
  border: 1px solid #171717;
  background: #171717;
  color: #fff;
  padding: 5px 20px;
  display: inline-block;
  margin: 1em 1em 0;

  &:hover {
    border: 1px solid #171717;
    background: #fff;
    color: #171717;
  }
`;

export const CancelButton = styled.a`
  cursor: pointer;
  padding: 5px 20px;
  display: inline-block;
  margin: 1em 1em 0;

  &:hover {
    border: 1px solid #171717;
  }
`;

export const FileInput = styled.label`
  cursor: pointer;

  outline: none;
  padding: 7px;
  border: none;
  border: 1px solid #ddd;
  background: transparent;
  margin: 1em auto 10px;
  width: 8em;
  font-size: 14px;
  margin: 1em 1em 0 0;

  &:hover {
    color: #fff;
    background: #171717;
  }
`;
