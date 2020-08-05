import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
  }
  body {
    background: var(--backgroundColor);
    -webkit-font-smoothing: antialised;
  }
  *, button, input {
    border: 0;
    background: none;
    outline: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--primaryColor);
  }
  :root {
    --backgroundColor: #0d1022;
    --primaryColor: #fff;
  }
`;