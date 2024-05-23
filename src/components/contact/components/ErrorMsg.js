import { styled } from "styled-components";

const Msg = styled.p`
  width: 100%;
  font-size: 16px;
  color: lightgreen;
  margin: 10px 10px;
`;

export const ErrorMsg = ({ message }) => {
  return <Msg>{message}</Msg>;
};
