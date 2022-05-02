/* eslint-disable max-len */

import _ from 'lodash';

import React, { useState } from 'react';

// material ui core
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import Divider from '@mui/material/Divider';

import { PREGUNTAS_KIDS_INPUT, PREGUNTAS_KIDS_SELECT } from './constants';
import { obtenerSatisfaccion } from './utils';

import NumberInput from '../../components/NumberInput/NumberInput.jsx';
import QuestionRange from '../../components/QuestionRange/QuestionRange.jsx';
import Resultado from './Resultado.jsx';
import styles from './styles.jsx';

const FormularioKids = () => {
  const classes = styles();

  const [formValues, setFormValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [resultado, setResultado] = useState(null);

  const onCleanData = () => {
    setFormValues({});
  };

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const prediccion = await obtenerSatisfaccion({
        formValues,
        isAbuelo: false,
      });

      setResultado(prediccion);
    } catch (error) {
      setResultado(null);
    } finally {
      setIsLoading(false);
    }
  };

  const cantidadPreguntasKidsSelect = PREGUNTAS_KIDS_SELECT.length;

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

          {PREGUNTAS_KIDS_INPUT.map((pregunta, key) => (
            <div className="mt-2" key={pregunta.attributeName}>
              <NumberInput
                attributeName={pregunta.attributeName}
                formValues={formValues}
                handleChange={setFormValues}
                label={`${key + 1 + cantidadPreguntasKidsSelect}. ${pregunta.label}`}
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

        <Grid item xs={12}>
          <Divider variant="fullWidth" />
        </Grid>

        {!_.isNil(resultado)
          ? (
            <Grid item xs={12}>
              <Resultado resultado={resultado} />
            </Grid>
          )
          : null}

      </Grid>
    </>
  );
};

FormularioKids.propTypes = {};

export default FormularioKids;
