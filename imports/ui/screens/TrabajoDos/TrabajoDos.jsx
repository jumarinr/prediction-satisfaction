import React from 'react';

// material ui core
import Grid from '@mui/material/Grid';

import Informacion from './Informacion.jsx';
import Formulario from './Formulario.jsx';

const TrabajoDos = () => (
  <>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Informacion />
      </Grid>

      <Grid item xs={12} md={6}>
        <Formulario />
      </Grid>

    </Grid>

  </>
);

TrabajoDos.propTypes = {};

export default TrabajoDos;
