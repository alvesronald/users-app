import React from 'react';

import { ThemeProvider } from 'styled-components';
import useAppTheme from 'contexts/theme';
import GlobalStyles from 'styles/global';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from 'routes';

import * as themes from './styles/themes';

function App() {
  const { currentTheme } = useAppTheme();

  console.log({ currentTheme });

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <BrowserRouter>
        <RoutesComponent />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
