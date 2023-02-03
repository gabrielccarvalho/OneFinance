import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme';
import { Home } from './src/pages';
import ViewContextProvider from './src/context/ViewContext';

function App(): JSX.Element {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ViewContextProvider>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </ViewContextProvider>
    </>
  );
}

export default App;
