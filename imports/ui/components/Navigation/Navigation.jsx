import { useHistory } from 'react-router-dom';

import React from 'react';
import PropTypes from 'prop-types';

// material ui core
import Grid from '@mui/material/Grid';
import Tabs from '../Tabs/Tabs.jsx';
import routes from '../../routes/routes';

const tabs = routes.map(({ path }) => ({
  description: path,
  value: path,
}));

const Navigation = ({ children }) => {
  const history = useHistory();
  const rutaActual = history.location.pathname;

  const redirectPage = (_event, ruta) => {
    history.push(ruta);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Tabs
            handleChange={redirectPage}
            value={rutaActual}
            tabs={tabs}
          />
        </Grid>
        <Grid item xs={12} className="mt-4">
          {children}
        </Grid>
      </Grid>
    </>
  );
};

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navigation;
