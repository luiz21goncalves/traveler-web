import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, input, button {
    outline: 0;
    border: 0;

    font-family: ${props => props.theme.fonts.default}, sans-serif;
    font-size: 16px;
  }

  body {
  background: ${props => props.theme.colors.background};
  }

  button {
    cursor: pointer;
  }


  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.complements};
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.shapeGray};
  }
`;
