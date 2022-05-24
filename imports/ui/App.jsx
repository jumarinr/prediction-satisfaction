// material ui core
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

import React from 'react';

import themeLight from './config/themeLight.js';
import Routes from './routes';

const App = () => (
  <>
    <ThemeProvider theme={themeLight}>
      <CssBaseline />

      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  </>
);

export default App;
