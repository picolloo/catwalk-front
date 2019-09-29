import styled from "styled-components";

export const Modal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const FormContainer = styled.section`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
`;

export const Input = styled.input`
  outline: none;
  padding: 7px;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  margin: 1em auto 10px;
  width: 20em;
`;

export const TextArea = styled.textarea`
  resize: none;
  overflow: hidden;
  outline: none;
  padding: 7px;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  margin: 1em auto 10px;
  width: 20em;
`;

export const SubmitButton = styled.a`
  cursor: pointer;
  border: 1px solid #171717;
  background: #171717;
  color: #fff;
  padding: 5px 20px;
  display: inline-block;
  margin: 1em 1em 0;
`;

export const CancelButton = styled.a`
  cursor: pointer;
  padding: 5px 20px;
  display: inline-block;
  margin: 1em 1em 0;
`;
