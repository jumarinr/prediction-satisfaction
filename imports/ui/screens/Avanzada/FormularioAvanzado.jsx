import React, { useState } from 'react';
import axios from 'axios';

// material ui core
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import LoadingButton from '@mui/lab/LoadingButton';
import Switch from '@mui/material/Switch';

// material ui icons
import UploadFileIcon from '@mui/icons-material/UploadFile';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import {
  DEFAULT_DATA_PLANTILLA_ADULTOS,
  DEFAULT_FORM_VALUES, DEFAULT_DATA_PLANTILLA_KIDS,
} from './constants.js';

import DownloadFile from '../../components/DownloadFile/DownloadFile.jsx';
import json2csv from '../../utils/json2csv.js';
import Resultados from './Resultados.jsx';
import styles from './styles.jsx';
import { BASE_URL, HEADERS } from '../../utils/constants.js';

const FormularioAvanzado = () => {
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

  const handleSwitch = (event) => {
    const { checked, name } = event.target;

    setFormValues((prevValue) => ({
      ...prevValue,
      [name]: checked,
    }));
  };

  const onSubmit = async () => {
    setIsLoading(true);
    const formData = new FormData();

    formData.append('file', formValues.file);
    formData.append('isAbuelo', formValues.isAbuelo);
    try {
      const respuesta = await axios.post(BASE_URL, formData, HEADERS);
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

  const onDownloadResults = async() => {
    const data = await json2csv({
      data: resultado,
      nombreArchivo: 'resultado.csv',
    });

    setFileDownload(data);
  };

  const onExportPlantilla = async() => {
    const data = await json2csv({
      data: formValues.isAbuelo
        ? DEFAULT_DATA_PLANTILLA_ADULTOS
        : DEFAULT_DATA_PLANTILLA_KIDS,
      nombreArchivo: 'plantilla_analisis.csv',
    });

    setFileDownload(data);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <InputLabel>
            Defina la población objetivo del análisis
          </InputLabel>
          <div className="mt-3 d-flex justify-content-start">
            <div>Niños (15 - 19 años)</div>
            <div className="ml-3">
              <Switch
                checked={formValues.isAbuelo}
                onChange={handleSwitch}
                name="isAbuelo"
                color="primary"
                className="switch-small mt-n2"
              />
            </div>
            <div className="ml-3">Abuelos</div>
          </div>
        </Grid>

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

        {resultado
          ? (
            <>
              <Grid item xs={12} className="mt-4">
                <div>
                  <b>
                    Resultado:
                  </b>
                </div>
                <div style={{ height: 500, width: '100%' }} className="mt-2">
                  <Resultados data={resultado} />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="d-flex justify-content-end mt-2">
                  <div>
                    <Button
                      variant="contained"
                      size="small"
                      className={classes.button}
                      onClick={cleanResult}
                      color="error"
                    >
                      Limpiar resultados
                    </Button>
                  </div>
                  <div className="ml-2">
                    <Button
                      startIcon={<FileDownloadIcon />}
                      variant="contained"
                      size="small"
                      className={classes.button}
                      onClick={onDownloadResults}
                      color="success"
                    >
                      Descagar resultado en CSV
                    </Button>
                  </div>
                </div>
              </Grid>
            </>
          )
          : null}
      </Grid>
      <DownloadFile
        downloadURL={fileDownload?.downloadURL}
        nombreArchivo={fileDownload?.nombreArchivo}
      />
    </>
  );
};

FormularioAvanzado.propTypes = {};

export default FormularioAvanzado;
