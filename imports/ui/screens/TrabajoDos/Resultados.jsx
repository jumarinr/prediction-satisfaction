// material ui core
import { DataGrid } from '@mui/x-data-grid';

import React, { useState, useContext } from 'react';

// material ui core
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

// material ui icons
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import { DEFAULT_FORM_VALUES } from './constants';

import columns from './columns';
import DownloadFile from '../../components/DownloadFile/DownloadFile.jsx';
import FormContext from '../../context/FormContext.jsx';
import json2csv from '../../utils/json2csv';
import styles from '../Avanzada/styles.jsx';

const Resultados = () => {
  const classes = styles();
  const [fileDownload, setFileDownload] = useState(null);
  const { resultado, setFormValues, setResultado } = useContext(FormContext);

  const onDownloadResults = async() => {
    const url = await json2csv({
      data: { resultado },
      nombreArchivo: 'resultado.csv',
    });

    setFileDownload(url);
  };

  const cleanResult = () => {
    setFormValues(DEFAULT_FORM_VALUES);
    setResultado(null);
  };

  return (
    <>
      <Card variant="outlined">
        <CardHeader title="Análisis de resultados de los datos" />
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <div style={{ height: 500, width: '100%' }} className="mt-2">
                <DataGrid
                  rows={resultado}
                  columns={columns}
                  pageSize={10}
                  rowsPerPageOptions={[10]}
                  getRowId={({ index }) => index}
                />
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
                    Descargar resultado en CSV
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <DownloadFile
        downloadURL={fileDownload?.downloadURL}
        nombreArchivo={fileDownload?.nombreArchivo}
      />
    </>
  );
};

Resultados.defaultProps = {
  data: [],
};

Resultados.propTypes = {};

export default Resultados;
