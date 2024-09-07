import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const pcLayoutSize = {
  padding: "150px 250px",
};

export const tabLayoutSize = {
  padding: "100px 150px",
};

export const moLayoutSize = {
  padding: "0 25px",
};

export const GlobalStyled = createGlobalStyle`
${reset}
body{
    font-family: "Noto Sans KR", sans-serif;
    background-color: rgb(32,33,36);
    color: #fff;
    list-style: none;
    box-sizing: border-box;
    a{
        text-decoration: none;
        color: #fff;
    }
}
`;

export default GlobalStyled;
