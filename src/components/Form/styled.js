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
    display: inline-block;
    max-width: 90px;
    width: 100%;
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

export const PrimaryButton = styled.a`
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

export const SecondaryButton = styled.a`
  cursor: pointer;
  padding: 5px 20px;
  display: inline-block;
  margin: 1em 1em 0;

  &:hover {
    border: 1px solid #171717;
  }
`;

export const FileInput = styled.label`
  margin-bottom: 10px;
  border-radius: 4px;

  background-color: #f5f7fa;
  align-self: center;
  text-align: center;
  padding: 3em;
  text-transform: uppercase;
  color: #848ea1;
  font-size: 12px;
  cursor: pointer;
  border-radius: 4px;
`;

export const ImagesSection = styled.div`
  display: flex;
`;

export const Image = styled.div`
  width: 6em;
  height: 6em;
  background-size: cover;
  margin-right: 10px;
  background-position: center;
  border-radius: 4px;

  cursor: pointer;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    display: none;
    text-transform: capitalize;
    z-index: 2;
    align-self: center;
  }

  &:hover span {
    display: block;
    color: #fff;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    transition: opacity 0.1s ease-in;
    border-radius: 4px;
    opacity: 0;
    position: absolute;
  }

  &:hover::after {
    display: block;
    background-color: #000;
    opacity: 0.5;
  }
`;

// cursor: pointer;

// outline: none;
// padding: 7px;
// border: none;
// border: 1px solid #ddd;
// background: transparent;
// margin-right: 1em;
// width: 8em;
// font-size: 14px;

// &:hover {
//   color: #fff;
//   background: #171717;
// }
