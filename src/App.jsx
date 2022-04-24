import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styled/GlobalStyles';

const theme = {
  light: '#FFFFFF',
  gold: '#FFC36D',
  navy: '#291b25',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <p>Hello App</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
