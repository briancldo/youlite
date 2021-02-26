import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { routes } from '../../utils/navigation';
import AppNavigation from '../AppNavigation';
import './PrivateRoute.css';

function PrivateRoute({ children, token, ...rest }) {
  return (
    <>
      <div className='app-content'>
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
      </div>
      <div className='app-navigation'>
        <AppNavigation />
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return { token: state.auth.token };
}

export default connect(mapStateToProps, null)(PrivateRoute);
