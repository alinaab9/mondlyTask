import React from 'react';
import { Route, Router } from 'react-router-dom';
import { TypesPage } from 'containers/typesPage';
import { TypesList } from 'containers/typesList';
import { CountdownPage } from 'components/countdownPage';
import history from '../../history';

export default props => (
  <Router history={history}>
    <div>
      <Route
          exact
          path="/"
          component={TypesPage}
          {...props}
        />
        <Route
          exact
          path="/typesList"
          component={TypesList}
          {...props}
        />
        <Route
          exact
          path="/countdown"
          component={CountdownPage}
          {...props}
        />
    </div>
  </Router>
);
