import { setToken } from '../data/token';

async function authenticate(provider, providerResponse) {
  const handler = providerHandlers[provider];
  if (!handler) throw new Error('Invalid provider.');

  await handler(providerResponse);
}

const providerHandlers = {
  google: async (googleResponse) => {
    const token = googleResponse.accessToken;
    setToken(token);
  },
};

export { authenticate };
