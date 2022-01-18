import React from 'react';

import { ThemeProvider } from 'styled-components';
import useAppTheme from 'contexts/theme';
import GlobalStyles from 'styles/global';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from 'routes';
import Wrapper from 'components/Wrapper';

import * as themes from './styles/themes';

function App() {
  const { currentTheme } = useAppTheme();

  return (
    <>
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyles />
        <Wrapper>
          <BrowserRouter>
            <RoutesComponent />
          </BrowserRouter>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
