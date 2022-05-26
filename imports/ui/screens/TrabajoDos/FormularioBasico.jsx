import React, { useContext, useState } from 'react';

// material ui core
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';

import { FORMULARIO_LIST, FORMULARIO_NUMBER } from './constants';
import { obtenerResultados } from './helpers';

import FormContext from '../../context/FormContext.jsx';
import NumberInput from '../../components/NumberInput/NumberInput.jsx';
import QuestionRange from '../../components/QuestionRange/QuestionRange.jsx';
import styles from '../Basica/styles.jsx';

const FormularioBasico = () => {
  const classes = styles();

  const { setResultado } = useContext(FormContext);

  const [formValues, setFormValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const cantidadPreguntas = FORMULARIO_NUMBER.length;

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const prediccion = await obtenerResultados(formValues);

      setResultado(prediccion);
    } catch (error) {
      setResultado(null);
    } finally {
      setIsLoading(false);
    }
  };

  const onCleanData = () => {
    setFormValues({});
    setResultado(null);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} className="mt-2">
          <strong className="text-primary">
            Complete la información
          </strong>
        </Grid>
        <Grid item xs={12} className="mt-2">
          {FORMULARIO_NUMBER.map((pregunta, key) => (
            <div className="mt-2" key={pregunta.attributeName}>
              <NumberInput
                attributeName={pregunta.attributeName}
                formValues={formValues}
                handleChange={setFormValues}
                label={`${key + 1}. ${pregunta.label}`}
                key={pregunta.attributeName}
              />
            </div>
          ))}

          {FORMULARIO_LIST.map((pregunta, key) => (
            <div className="mt-2" key={pregunta.attributeName}>
              <QuestionRange
                attributeName={pregunta.attributeName}
                formValues={formValues}
                handleChange={setFormValues}
                label={`${cantidadPreguntas + key + 1}. ${pregunta.label}`}
                options={pregunta.options || [{ value: 10, description: 10 }]}
                key={pregunta.attributeName}
              />
            </div>
          ))}
        </Grid>

        <Grid item xs={12} className="mt-3">
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

FormularioBasico.propTypes = {};

export default FormularioBasico;
