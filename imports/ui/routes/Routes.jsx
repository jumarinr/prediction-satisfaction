import _ from 'lodash';

import {
  Route, Switch, useLocation, Redirect, withRouter,
} from 'react-router-dom';

import React, { Suspense } from 'react';

import routes from './routes';
import SuspendedPage from '../components/SuspendedPage/SuspendedPage.jsx';
import Navigation from '../components/Navigation/Navigation.jsx';

const rutas = _.map(routes, 'path');

const Routes = () => {
  const location = useLocation();

  return (
    <Switch>
      <Route path={rutas} exact>
        <Navigation>
          <Suspense fallback={<SuspendedPage />}>
            <Switch location={location} key={location.pathname}>
              {routes.map(({ component, path }) => (
                <Route
                  key={path}
                  path={path}
                  exact
                  render={withRouter(component)}
                />
              ))}
            </Switch>
          </Suspense>
        </Navigation>
      </Route>
      <Redirect to="/trabajo-1" />
    </Switch>

  );
};

Routes.propTypes = {};

export default Routes;
