import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styled/GlobalStyles';
import theme from './theme';

import {
  Header,
  AboutMe,
  Offer,
  Contact,
  Footer,
  ScrollToTop,
} from './components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ScrollToTop />
      <Header />
      <AboutMe />
      <Offer />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
