import React, { useState } from 'react';

// material ui core
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import { BASIC_TAB, TABS, VIEW_TYPE } from './constants';

import Tabs from '../../components/Tabs/Tabs.jsx';

const MenuIteraccion = () => {
  const [tabSelected, setValue] = useState(BASIC_TAB.value);

  const handleChangeTab = (_event, newValue) => setValue(newValue);

  const Content = VIEW_TYPE.get(tabSelected);
  return (
    <>
      <Card variant="outlined">
        <CardHeader
          title="Predicción de nivel de satisfacción para niños y abuelos"
        />
        <CardContent className="mt-n4">
          <Grid container spacing={3}>

            <Grid item xs={12}>
              <Divider variant="fullWidth" />
            </Grid>

            <Grid item xs={12}>
              <strong className="text-primary">Por favor ingrese el tipo de forma (basica o avanzada) de medir el nivel de satisfacción </strong>
            </Grid>

            <Grid item xs={12}>
              <Tabs
                handleChange={handleChangeTab}
                tabs={TABS}
                value={tabSelected}
              />
            </Grid>
            <Grid item xs={12}>
              <Content />
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

MenuIteraccion.propTypes = {};

export default MenuIteraccion;
