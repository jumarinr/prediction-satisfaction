import React, { useState } from 'react';

// material ui core
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import { ADVANCED_TAB, BASIC_TAB, TABS } from './constants.js';

import FormularioAvanzado from './FormularioAvanzado.jsx';
import FormularioBasico from './FormularioBasico.jsx';
import Tabs from '../../components/Tabs/Tabs.jsx';

const VIEW_TYPE = new Map([
  [BASIC_TAB.value, FormularioBasico],
  [ADVANCED_TAB.value, FormularioAvanzado],
]);

const Formulario = () => {
  const [tabSelected, setValue] = useState(BASIC_TAB.value);

  const handleChangeTab = (_event, newValue) => setValue(newValue);

  const Content = VIEW_TYPE.get(tabSelected);

  return (
    <>
      <Card variant="outlined">
        <CardHeader title="Análisis de scorecard a partir de sus caracteristicas" />

        <CardContent className="mt-n4">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Divider variant="fullWidth" />
            </Grid>

            <Grid item xs={12} className="mt-2">
              <strong className="text-primary">
                Por favor ingrese el tipo de forma (basica o avanzada) de medir el nivel crediticio
              </strong>
            </Grid>

            <Grid item xs={12}>
              <Tabs handleChange={handleChangeTab} tabs={TABS} value={tabSelected} />
            </Grid>

            <Grid item xs={12} className="mt-2">
              <Content />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

    </>
  );
};

Formulario.propTypes = {};

export default Formulario;
