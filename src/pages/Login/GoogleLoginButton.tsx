import React from 'react';
import { GoogleLogin } from 'react-google-login';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { useReplace, routes } from '../../utils/navigation';
import * as backendAuth from '../../utils/auth';
import config from 'env';

const useStyles = makeStyles({
  socialLoginButton: {
    width: '80%',
  },
});

export default function LoginButton() {
  const classes = useStyles();
  const navigateToHome = useReplace(routes.home);

  function authenticate(provider) {
    return async (response) => {
      try {
        await backendAuth.authenticate(provider, response);
      } catch (error) {
        console.error('Authentication error:', error);
      }
      navigateToHome();
    };
  }

  return (
    <GoogleLogin
      clientId={config.get('oauth.google.clientId')}
      buttonText='Sign in with Google'
      onSuccess={authenticate('google')}
      cookiePolicy='single_host_origin'
      className={classes.socialLoginButton}
      scope='https://www.googleapis.com/auth/youtube.readonly'
    />
  );
}
