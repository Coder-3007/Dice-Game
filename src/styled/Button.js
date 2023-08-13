import { styled } from "styled-components";
export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.3s ease-in;

  //& is used as sudo symbol and for hover property in sass css
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid red;
  color: red;
  &:hover {
    background-color: #d31a38;
    border: 1px solid transparent;
    color: white;
  }
`;
