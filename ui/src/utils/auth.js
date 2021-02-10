async function authenticate(provider, providerResponse) {
  const handler = providerHandlers[provider];
  if (!handler) throw new Error('Invalid provider.');

  await handler(providerResponse);
}

const providerHandlers = {
  google: async (googleResponse) => {
    console.log({ googleResponse });
  },
};

export default { authenticate };
