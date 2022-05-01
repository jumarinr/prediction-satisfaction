// material ui core
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import React from 'react';

import themeLight from './config/themeLight.js';
import VistaPrincipal from './screens/Principal/VistaPrincipal.jsx';

const App = () => (
  <>
    <ThemeProvider theme={themeLight}>
      <CssBaseline />

      <VistaPrincipal />

    </ThemeProvider>
  </>
);

export default App;
