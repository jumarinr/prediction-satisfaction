// material ui core
import { DataGrid } from '@mui/x-data-grid';
import { colors } from '@mui/material';

import React, { useState, useContext } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

// material ui core
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';

// material ui icons
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import { DEFAULT_FORM_VALUES, SEGMENTS_LABEL } from './constants';

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

  const primerValor = resultado[0]?.values;
  const applyDownload = resultado.length !== 1;

  return (
    <>
      <Card variant="outlined">
        <CardHeader title="Análisis de resultados de los datos" />
        <CardContent>
          <Grid container className="mt-n4">
            <Grid item xs={12}>
              <Divider variant="fullWidth" />
            </Grid>
            <Grid item xs={12} className="mt-2">
              {resultado.length === 1
                ? (
                  <div className="text-center mt-2" style={{ height: 250 }}>
                    <div>
                      Tu puntaje crediticio es:
                      <strong>
                        {` ${primerValor} de 850 puntos`}
                      </strong>
                    </div>
                    <div className="mt-4">
                      <ReactSpeedometer
                        maxValue={850}
                        minValue={300}
                        value={primerValor}
                        needleColor="steelblue"
                        customSegmentLabels={SEGMENTS_LABEL}
                        customSegmentStops={[300, 410, 520, 630, 740, 850]}
                        segmentColors={[
                          colors.red.A700, colors.red.A200, colors.yellow.A700,
                          colors.green.A400, colors.green.A700,
                        ]}
                        segments={10}
                        needleTransition="easeElastic"
                        needleTransitionDuration={4000}
                      />
                    </div>
                  </div>
                )
                : (
                  <div style={{ height: 500, width: '100%' }} className="mt-2">
                    <DataGrid
                      rows={resultado}
                      columns={columns}
                      pageSize={10}
                      rowsPerPageOptions={[10]}
                      getRowId={({ index }) => index}
                    />
                  </div>
                )}
            </Grid>

            <Grid item xs={12} className="text-center">
              <FormLabel id="demo-radio-buttons-group-label">
                El rango para su puntaje va de 300 a 850 según puntaje FICO® Score
              </FormLabel>
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
                {applyDownload
                  ? (
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
                  )
                  : null}
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
