import React from 'react';

// material ui core
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const Informacion = () => (
  <>
    <Card variant="outlined">
      <CardHeader title="Modelo de riesgo de crédito" />
      <CardContent className="mt-n4">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Divider variant="fullWidth" />
          </Grid>
          <Grid item xs={12} className="mt-2">
            <p>
              Aplicación web que le permite conocer, de acuerdo con sus características,
              cuál es su scorecard
            </p>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </>
);

Informacion.propTypes = {};

export default Informacion;
