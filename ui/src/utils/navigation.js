import { useHistory } from 'react-router-dom';

const routes = {
  login: '/login',
  home: '/',
};

function slashify(route) {
  if (!route) return '/';
  if (route === '' || route[0] !== '/') return `/${route}`;
  return route;
}

function applyParameters(route, params) {
  const routeParts = route.split('/');
  const parameterized = [];

  for (const routePart of routeParts) {
    const replacement =
      routePart[0] !== ':' ? routePart : params[routePart.slice(1)];

    if (replacement === undefined)
      throw new Error(
        `Param for ${routePart} not given. Given params: ${params}`
      );
    parameterized.push(replacement);
  }
  return parameterized.join('/');
}

function useNavigate(page, navigationType) {
  const route = slashify(page);
  const history = useHistory();
  return (params = {}, state = {}) =>
    history[navigationType](applyParameters(route, params), state);
}

function useRedirect(page) {
  return useNavigate(page, 'push');
}

function useReplace(page) {
  return useNavigate(page, 'replace');
}

export { useRedirect, useReplace, routes };
