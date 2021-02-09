import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }

  body, input, button {
    font-family: 'Heebo', sans-serif;
    font-size: 16px;
  }

  body {
    background: #F5F8FA;
  }

  button {
    cursor: pointer;
  }
`;
