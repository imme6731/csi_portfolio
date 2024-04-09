import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const pcLayoutSize = {
  padding: "0 250px",
};

export const tabLayoutSize = {
  padding: "0 80px",
};

export const moLayoutSize = {
  padding: "0 25px",
};

export const GlobalStyled = createGlobalStyle`
${reset}
body{
    font-family: "Noto Sans KR", sans-serif;
    background-color: #fff;
    color: #121212;
    a{
        text-decoration: none;
        color: #121212;
    }
}
`;

export default GlobalStyled;
