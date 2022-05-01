// material ui core
import { DataGrid } from '@mui/x-data-grid';

import React from 'react';
import PropTypes from 'prop-types';

import columns from './columns';

const Resultados = ({ data }) => (
  <>
    <DataGrid
      rows={data}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      getRowId={({ index }) => index}
    />
  </>
);

Resultados.defaultProps = {
  data: [],
};

Resultados.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Resultados;
