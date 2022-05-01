import React, { useState } from 'react';

// material ui core
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Switch from '@mui/material/Switch';

import FormularioAbuelos from './FormularioAbuelos.jsx';
import FormularioKids from './FormularioKids.jsx';

const FormularioBasico = () => {
  const [isAbuelo, setIsAbuelo] = useState(false);

  const FormContent = isAbuelo ? FormularioAbuelos : FormularioKids;

  const handleSwitch = (event) => {
    const { checked } = event.target;

    setIsAbuelo(checked);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputLabel>
            Seleccione su clasificación
          </InputLabel>
          <div className="mt-3 d-flex justify-content-start">
            <div>Niño (15 - 19 años)</div>
            <div className="ml-3">
              <Switch
                checked={isAbuelo}
                onChange={handleSwitch}
                name="isAbuelo"
                color="primary"
                className="switch-small mt-n2"
              />
            </div>
            <div className="ml-3">Abuelo</div>
          </div>
        </Grid>

        <Grid item xs={12}>
          <Divider variant="fullWidth" />
        </Grid>

        <Grid item xs={12}>
          <FormContent />
        </Grid>
      </Grid>
    </>
  );
};

FormularioBasico.propTypes = {};

export default FormularioBasico;
