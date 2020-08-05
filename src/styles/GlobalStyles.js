import 'react-toastify/dist/ReactToastify.css';
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
    font-family: 'Roboto', sans-serif;
    color: var(--primaryColor);
  }
  :root {
    --backgroundColor: #0d1022;
    --primaryColor: #fff;
    --boxShadow: 0px 3px 12px 1px rgba(0,0,0,0.75);
    font-size: 10px;
  }

  
  input {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: block;
    border-radius: 4px;
    margin-bottom: 10px;
    padding: 5px 10px;
    transition: .2s;

    &:focus {
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
  }

  button {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 4px;
    text-align: center;
    display: block;
    padding: 8px 10px;
    cursor: pointer;
    transition: .2s;
    font-weight: 700;

    &:hover,
    &:focus {
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
  }

  .Toastify__toast {
    flex-direction: column-reverse;
  }
  .Toastify__close-button {
    text-align: right;
    margin-bottom:10px;
    
    &:hover,
    &:focus {
      border: none;
    }
  }
  .Toastify__toast-body {
    font-size: 1.4rem;
  }
`;