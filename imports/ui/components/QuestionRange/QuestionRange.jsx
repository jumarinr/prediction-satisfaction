import _ from 'lodash';

import React from 'react';
import PropTypes from 'prop-types';

// material ui core
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/FormHelperText';

const QuestionRange = ({
  label, options, formValues, handleChange, attributeName,
}) => {
  const handleChangeSelect = (event) => {
    handleChange((prevValue) => ({
      ...prevValue,
      [attributeName]: event.target.value,
    }));
  };

  return (
    <>
      <div className="d-flex justify-content-start">
        <InputLabel className="align-self-center">{label}</InputLabel>
        <FormControl className="ml-4">
          <Select
            id="demo-simple-select"
            value={!_.isNil(formValues[attributeName])
              ? formValues[attributeName]
              : ''}
            onChange={handleChangeSelect}
            name={attributeName}
            fullWidth={false}
            size="small"
            autoWidth
          >
            {options
              .map(({ description, value }, key) => {
                const keyValue = `${attributeName}${key}`;

                return (
                  <MenuItem value={value} key={keyValue}>
                    {description}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

QuestionRange.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  formValues: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  attributeName: PropTypes.string.isRequired,
};

export default QuestionRange;
