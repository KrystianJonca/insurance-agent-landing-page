import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styled/GlobalStyles';
import theme from './theme';
import { Header } from './components';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
};

export default App;
