import React from "react";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { useReplace, routes } from "../../utils/navigation";
import * as backendAuth from "../../utils/auth";
import config from "../../env/config";

const useStyles = makeStyles({
  socialLoginButton: {
    width: "80%",
  },
});

const LoginButton: React.FC = () => {
  const classes = useStyles();
  const navigateToHome = useReplace(routes.home);

  function authenticate() {
    return async (response: GoogleLoginResponse) => {
      try {
        await backendAuth.authenticate("google", response);
      } catch (error) {
        console.error("Authentication error:", error);
      }
      navigateToHome();
    };
  }

  return (
    <GoogleLogin
      clientId={config.get("oauth.google.clientId")}
      buttonText="Sign in with Google"
      onSuccess={authenticate}
      cookiePolicy="single_host_origin"
      className={classes.socialLoginButton}
      scope="https://www.googleapis.com/auth/youtube.readonly"
    />
  );
};

export default LoginButton;
