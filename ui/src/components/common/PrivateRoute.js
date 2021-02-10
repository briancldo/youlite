import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { routes } from '../../utils/navigation';

function PrivateRoute({ children, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
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
  return { isLoggedIn: state.user.isLoggedIn };
}

export default connect(mapStateToProps, null)(PrivateRoute);
