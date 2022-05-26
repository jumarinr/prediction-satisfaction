import React from 'react';

// material ui core
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

const Informacion = () => (
  <>
    <Card variant="outlined">
      <CardHeader title="Modelo de riesgo de crédito" />
      <CardContent>
        <p>
          Aplicación web que le permite conocer, de acuerdo con sus características,
          cuál es su scorecard
        </p>
      </CardContent>
    </Card>
  </>
);

Informacion.propTypes = {};

export default Informacion;
