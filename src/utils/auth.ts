import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { setToken } from '../data/token';

type LoginProvider = 'google';
type GoogleResponse = GoogleLoginResponse | GoogleLoginResponseOffline;
type LoginResponse = GoogleResponse;

async function authenticate(
  provider: LoginProvider,
  providerResponse: LoginResponse
): Promise<void> {
  const handler = providerHandlers[provider];
  if (!handler) throw new Error('Invalid provider.');

  await handler(providerResponse);
}

const providerHandlers = {
  google: async (googleResponse: GoogleResponse) => {
    if (!('accessToken' in googleResponse))
      return alert('No internet connection.');
    const token = googleResponse.accessToken;
    setToken(token);
  },
};

export { authenticate };
