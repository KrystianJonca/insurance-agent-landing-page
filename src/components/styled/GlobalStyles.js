import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --fs-xl: 5rem;
    --fs-md: 2rem;
    --fs-sm: 1.2rem;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.light};
    color: ${({ theme }) => theme.navy};
  }

  a {
    color: ${({ theme }) => theme.navy};
    text-decoration: none;
  }

  p, a {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4 {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyles;
