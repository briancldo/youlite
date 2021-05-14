import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { connect } from "react-redux";

import { routes } from "../../utils/navigation";
import AppNavigation from "../AppNavigation";
import "./PrivateRoute.css";
import { StoreState } from "../../data/store/store.types";

interface PrivateRouteProps extends RouteProps {
  token?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  token,
  ...rest
}) => {
  return (
    <>
      <div className="app-content">
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
      <div className="app-navigation">
        <AppNavigation />
      </div>
    </>
  );
};

function mapStateToProps(state: StoreState) {
  return { token: state?.auth?.token };
}

export default connect(mapStateToProps, null)(PrivateRoute);
