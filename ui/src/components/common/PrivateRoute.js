import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { routes } from '../../utils/navigation';

function PrivateRoute({ children, token, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{ pathname: routes.login, state: { from: location } }}
          />
        )
      }
    /> 
  );
}

function mapStateToProps(state) {
  return { token: state.auth.token };
}

export default connect(mapStateToProps, null)(PrivateRoute);
