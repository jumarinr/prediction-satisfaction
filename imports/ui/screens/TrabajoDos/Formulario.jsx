import axios from 'axios';
import React, { useState } from 'react';

// material ui core
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import LoadingButton from '@mui/lab/LoadingButton';

// material ui icons
import UploadFileIcon from '@mui/icons-material/UploadFile';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import { BASE_URL_TRABAJO_2, HEADERS } from '../../utils/constants.js';
import { DEFAULT_FORM_VALUES } from './constants.js';

import styles from '../Avanzada/styles.jsx';

const Formulario = () => {
  const classes = styles();

  const [isLoading, setIsLoading] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);
  const [fileDownload, setFileDownload] = useState(null);

  const onChangeFile = () => {
    const input = document.getElementById('file_upload');
    const [fileInfo] = input.files;

    setFormValues((prevData) => ({
      ...prevData,
      file: fileInfo,
    }));
  };

  const onSubmit = async () => {
    setIsLoading(true);
    const formData = new FormData();

    formData.append('file', formValues.file);

    try {
      const respuesta = await axios.post(BASE_URL_TRABAJO_2, formData, HEADERS);
      setResultado(respuesta?.data?.data);
    } catch (error) {
      setResultado(null);
    } finally {
      setIsLoading(false);
    }
  };

  const cleanResult = () => {
    setFormValues(DEFAULT_FORM_VALUES);
    setResultado(null);
  };

  const onExportPlantilla = () => {

  };

  return (
    <>
      <Card variant="outlined">
        <CardHeader title="Análisis de scorecard a partir de sus caracteristicas" />
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <FormLabel id="demo-radio-buttons-group-label">
                Por favor anexe el documento en csv con el formato* indicado
              </FormLabel>
              <label htmlFor="file_upload">
                <input className={classes.emptyInput} accept=".csv" id="file_upload" type="file" onChange={onChangeFile} />
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <UploadFileIcon />
                </IconButton>
              </label>
            </Grid>

            {formValues.file
              ? (
                <Grid item xs={12} className="mt-n2">
                  <div>
                    <b>Archivo: </b>
                    {formValues.file.name}
                  </div>
                </Grid>
              )
              : null}

            <Grid item xs={12}>
              <div className="d-flex justify-content-end mt-2">
                <div>
                  <Button
                    variant="contained"
                    size="small"
                    className={classes.button}
                    onClick={onExportPlantilla}
                  >
                    Descargar plantilla CSV para análisis
                  </Button>
                </div>
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
                    Realizar análisis
                  </LoadingButton>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} className="mt-4">
              <Divider variant="fullWidth" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

Formulario.propTypes = {};

export default Formulario;
