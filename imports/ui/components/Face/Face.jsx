/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const Face = ({
  value, label, valueCalculated, color, icon: Icon,
}) => {
  const showColor = valueCalculated === value;
  const props = { className: 'd-flex flex-column' };

  if (showColor) {
    props.style = {
      color,
    };
  }

  return (
    <div {...props}>
      <div>
        {label}
      </div>

      <div className="align-self-center">
        <Icon sx={{ fontSize: 70 }} />
      </div>

    </div>
  );
};

Face.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  valueCalculated: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default Face;
