import React from 'react';
import PropTypes from 'prop-types';

// material ui core
import Grid from '@mui/material/Grid';

import { calculateSegmento } from './utils';
import { FACES } from './constantsFaces';
import Face from '../../components/Face/Face.jsx';

const Resultado = ({ resultado }) => {
  const caraEncontrada = calculateSegmento(resultado);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <strong className="text-primary">Su nivel de satisfacción calculado: </strong>
          <strong>{resultado}</strong>
        </Grid>
        <Grid item xs={12}>
          <div className="d-flex justify-content-between">
            {FACES.map((face) => (
              <Face
                color={face.color}
                label={face.label}
                valueCalculated={caraEncontrada}
                value={face.value}
                key={face.value}
                icon={face.icon}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

Resultado.propTypes = {
  resultado: PropTypes.number.isRequired,
};

export default Resultado;
