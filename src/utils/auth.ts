import { GoogleLoginResponse } from 'react-google-login';
import { setToken } from '../data/token';

type LoginProvider = 'google';
type LoginResponse = GoogleLoginResponse;

async function authenticate(provider: LoginProvider, providerResponse: LoginResponse): Promise<void> {
  const handler = providerHandlers[provider];
  if (!handler) throw new Error('Invalid provider.');

  await handler(providerResponse);
}

const providerHandlers = {
  google: async (googleResponse: GoogleLoginResponse) => {
    const token = googleResponse.accessToken;
    setToken(token);
  },
};

export { authenticate };
