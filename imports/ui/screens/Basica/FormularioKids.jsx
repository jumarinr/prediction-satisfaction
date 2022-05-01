/* eslint-disable max-len */
import React, { useState } from 'react';

// material ui core
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';

import { PREGUNTAS_KIDS_SELECT } from './constants';

import QuestionRange from '../../components/QuestionRange/QuestionRange.jsx';
import styles from './styles.jsx';

const FormularioKids = () => {
  const classes = styles();

  const [formValues, setFormValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onCleanData = () => {
    setFormValues({});
  };

  const onSubmit = () => {
    setIsLoading(true);
    setIsLoading(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <strong className="text-primary">
            Formulario para predecir su nivel de satisfacción
          </strong>
        </Grid>

        <Grid item xs={12}>
          {PREGUNTAS_KIDS_SELECT.map((pregunta, key) => (
            <div className="mt-2" key={pregunta.attributeName}>
              <QuestionRange
                attributeName={pregunta.attributeName}
                formValues={formValues}
                handleChange={setFormValues}
                label={`${key + 1}. ${pregunta.label}`}
                options={pregunta.options || [{ value: 10, description: 10 }]}
                key={pregunta.attributeName}
              />
            </div>
          ))}
        </Grid>

        <Grid item xs={12}>
          <div className="d-flex justify-content-end mt-2">
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              onClick={onCleanData}
              color="error"
            >
              Limpiar Datos
            </Button>

            <div className="ml-2">
              <LoadingButton
                loading={isLoading}
                loadingIndicator="Cargando..."
                variant="contained"
                size="small"
                className={classes.button}
                onClick={onSubmit}
                color="success"
              >
                Enviar
              </LoadingButton>
            </div>
          </div>
        </Grid>

      </Grid>
    </>
  );
};

FormularioKids.propTypes = {};

export default FormularioKids;
