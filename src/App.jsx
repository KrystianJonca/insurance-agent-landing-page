import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styled/GlobalStyles';
import theme from './theme';

import { Header, AboutMe, Offer } from './components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <AboutMe />
      <Offer />
    </ThemeProvider>
  );
};

export default App;
