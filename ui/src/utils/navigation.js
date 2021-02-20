import { useHistory } from 'react-router-dom';

const routes = {
  login: '/login',
  search: '/search',
  playlist: '/playlist',
  home: '/',
};

function slashify(route) {
  if (!route) return '/';
  if (route === '' || route[0] !== '/') return `/${route}`;
  return route;
}

function getQueryString(query) {
  const queryParts = [];

  for (const key in query) {
    queryParts.push(`${key}=${query[key]}`);
  }

  return queryParts.join('&');
}

function applyParameters(route, params, query) {
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

  const queryString = getQueryString(query);
  return parameterized.join('/').concat(`?${queryString}`);
}

function useNavigate(page, navigationType) {
  const route = slashify(page);
  const history = useHistory();
  return (params = {}, query = {}, state = {}) =>
    history[navigationType](applyParameters(route, params, query), state);
}

function useRedirect(page) {
  return useNavigate(page, 'push');
}

function useReplace(page) {
  return useNavigate(page, 'replace');
}

function getQueryObject(queryString) {
  if (!queryString) return {};

  const _queryString = queryString.slice(1);
  const queryParts = _queryString.split('&');
  const queryObject = {};
  queryParts.forEach(part => {
    const [key, value] = part.split('=');
    queryObject[key] = value;
  });

  return queryObject;
}

export { useRedirect, useReplace, routes, getQueryObject };
