import React from 'react';

// material ui core
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

const Informacion = () => (
  <>
    <Card variant="outlined">
      <CardHeader title="Modelo para predecir el nivel de satisfacción de niños y de abuelos de acuerdo a la composición del hogar y otros determinantes" />
      <CardContent>
        <p>
          El insumo principal de este trabajo son los datos de la Encuesta
          de Calidad de Vida del DANE. Esta encuesta recoge información de
          los hogares de Colombia y permite estudiar su composición, sus
          condiciones socioeconómicas, de satisfacción con la vida, etc.
        </p>

        <p>
          Para este trabajo la variable a predecir es el nivel de satisfacción
          con la vida y se enfocará en dos tipos de sujetos: niños y abuelos.
        </p>

      </CardContent>
    </Card>
  </>
);

Informacion.propTypes = {};

export default Informacion;
