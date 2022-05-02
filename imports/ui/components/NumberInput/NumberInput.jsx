import _ from 'lodash';

import React from 'react';
import PropTypes from 'prop-types';

// material ui core
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/FormHelperText';

const NumberInput = ({
  label, formValues, handleChange, attributeName,
}) => {
  const handleChangeInput = (event) => {
    const { value } = event.target;

    const valueParsed = Number(value);

    handleChange((prevValue) => ({
      ...prevValue,
      [attributeName]: valueParsed >= 0
        ? valueParsed
        : 0,
    }));
  };
  return (
    <>
      <div className="d-flex justify-content-start">
        <InputLabel className="align-self-center">{label}</InputLabel>
        <div style={{ maxWidth: 100 }}>
          <TextField
            id="outlined-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
            value={!_.isNil(formValues[attributeName])
              ? formValues[attributeName]
              : ''}
            onChange={handleChangeInput}
            className="ml-2"
          />
        </div>

      </div>

    </>
  );
};

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  formValues: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  attributeName: PropTypes.string.isRequired,
};

export default NumberInput;
