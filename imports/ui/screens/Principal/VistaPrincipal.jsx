import React from 'react';

// material ui core
import Grid from '@mui/material/Grid';

import MenuIteraccion from './MenuIteraccion.jsx';
import Informacion from '../Informacion/Informacion.jsx';

const VistaPrincipal = () => (
  <>
    {/* Contenedor principal */}
    <Grid container spacing={3}>

      {/* Información */}
      <Grid item xs={12} md={6}>
        <Informacion />
      </Grid>

      {/* Menu de iteracción */}
      <Grid item xs={12} md={6}>
        <MenuIteraccion />
      </Grid>
    </Grid>
  </>
);

VistaPrincipal.propTypes = {};

export default VistaPrincipal;
