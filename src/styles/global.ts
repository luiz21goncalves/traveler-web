import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body, input, button {
    font-family: 'Heebo', sans-serif;
    font-size: 16px;
  }

  body {
  background: #e5e5e5;
  }

  button {
    cursor: pointer;
  }
`;
