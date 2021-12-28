import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    -webkit-tap-highlight-color: transparent;
    margin: 0;
    padding: 0;
    font-feature-settings: 'pnum' on, 'lnum' on;
  }
  *:visited {
    text-decoration: none;
  }
  *:active, *:hover, *:focus {
    outline: none;
}
  html {
    width: 100%;
    height: 100%;
    font-size: 16px;
    color: #2D2D2F;
    overflow: hidden;
  }
  body {
    width: 100%;
    height: 100%;
    background: #fff;
  }
  #root {
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  button {
    border: none;
    padding: 0;
    background: transparent;
  }
`;

export default GlobalStyle;
