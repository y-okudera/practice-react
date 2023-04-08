import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin-left: 16px;
    margin-right: 16px;
  }

  @media screen and (min-width: 768px) {
    body {
      margin-left: 32px;
      margin-right: 32px;
    }
  }

  @media screen and (min-width: 1200px) {
    body {
      margin-left: 64px;
      margin-right: 64px;
    }
  }
`;

export default GlobalStyles;
