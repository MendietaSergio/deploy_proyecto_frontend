import { createGlobalStyle } from "styled-components";
import Theme from "../constants/uiTheme";

const { fonts, palette } = Theme;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
  html {
    scroll-behavior: smooth;
  }
  * {
    font-family: ${fonts[0]};
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${palette.background};
    color: ${palette.text};
    overflow-x: hidden;
  }

  button {
    border-radius: 0;
    border: none;
    font-family: ${fonts[0]};
    font-weight: 700;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }

  ul, ol {
    padding: 0;
    margin: 0;
  }

  p {
    margin: 1rem 0;
    font-size: 1rem;
    line-height: 1.7rem;
  }

  b {
    font-weight: bold;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: ${fonts[0]};
  }

  a {
    text-decoration: none;
    color: inherit;
    @media(hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default GlobalStyle;
