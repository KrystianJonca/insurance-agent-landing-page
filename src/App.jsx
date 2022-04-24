import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styled/GlobalStyles';
import theme from './theme';

import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
