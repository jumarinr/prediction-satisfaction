import React, { useState } from 'react';

// material ui core
import Grid from '@mui/material/Grid';

import { DEFAULT_FORM_VALUES } from './constants.js';

import FormContext from '../../context/FormContext.jsx';
import Formulario from './Formulario.jsx';
import Informacion from './Informacion.jsx';
import Resultados from './Resultados.jsx';

const TrabajoDos = () => {
  const [resultado, setResultado] = useState(null);
  const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);

  const valueContext = {
    resultado,
    setResultado,
    formValues,
    setFormValues,
  };

  return (
    <>
      <FormContext.Provider value={valueContext}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container className="d-flex flex-row justify-content-center">
              <Grid item xs={12} md={6} className="p-2">
                <Informacion />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container className="d-flex flex-row justify-content-center">
              <Grid item xs={12} md={6} className="p-2">
                <Formulario
                  setResultado={setResultado}
                  formValues={formValues}
                  setFormValues={setFormValues}
                />
              </Grid>
            </Grid>
          </Grid>

          {resultado
            ? (
              <Grid item xs={12}>
                <Grid container className="d-flex flex-row justify-content-center">
                  <Grid item xs={12} md={6} className="p-2">
                    <Resultados
                      setFormValues={setFormValues}
                      data={resultado}
                      setResultado={setResultado}
                    />
                  </Grid>
                </Grid>
              </Grid>
            )
            : null}
        </Grid>
      </FormContext.Provider>
    </>
  );
};

TrabajoDos.propTypes = {};

export default TrabajoDos;
