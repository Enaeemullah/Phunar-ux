// src/styles/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Avenir Book';
    src: url('/fonts/Avenir-Book.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir Medium';
    src: url('/fonts/Avenir-Medium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir Heavy';
    src: url('/fonts/Avenir-Heavy.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  body {
    font-family: 'Avenir Book', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // You can add additional global styles here if needed
`;

export default GlobalStyle;
