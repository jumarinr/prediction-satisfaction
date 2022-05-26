import axios from 'axios';
import React, { useContext, useState } from 'react';

// material ui core
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';

// material ui icons
import UploadFileIcon from '@mui/icons-material/UploadFile';

import { BASE_URL_TRABAJO_2, HEADERS } from '../../utils/constants.js';
import { PLANTILLA_MIGRACION } from './constants.js';

import FormContext from '../../context/FormContext.jsx';
import styles from '../Avanzada/styles.jsx';
import json2csv from '../../utils/json2csv.js';
import DownloadFile from '../../components/DownloadFile/DownloadFile.jsx';

const FormularioAvanzado = () => {
  const { formValues, setFormValues, setResultado } = useContext(FormContext);

  const classes = styles();

  const [isLoading, setIsLoading] = useState(false);
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

  const onExportPlantilla = async() => {
    const data = await json2csv({
      data: PLANTILLA_MIGRACION,
      nombreArchivo: 'plantilla_analisis.csv',
    });

    setFileDownload(data);
  };

  return (
    <>
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
                disabled={!formValues.file}
                color="success"
              >
                Realizar análisis
              </LoadingButton>
            </div>
          </div>
        </Grid>
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
