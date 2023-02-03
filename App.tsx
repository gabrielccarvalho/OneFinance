import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme';
import { Home } from './src/pages';
import ViewContextProvider from './src/context/ViewContext';
import BalanceContextProvider from './src/context/BalanceContext';

function App(): JSX.Element {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ViewContextProvider>
        <BalanceContextProvider>
          <ThemeProvider theme={theme}>
            <Home />
          </ThemeProvider>
        </BalanceContextProvider>
      </ViewContextProvider>
    </>
  );
}

export default App;
