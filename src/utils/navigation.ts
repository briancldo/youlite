import { useHistory } from 'react-router-dom';

const routes = {
  login: '/login',
  search: '/search',
  playlist: '/playlist',
  video: '/video',
  settings: '/settings',
  home: '/',
};

interface Query {
  [key: string]: string;
}

interface Params {
  [key: string]: string;
}

type NavigationType = 'push' | 'replace';

function slashify(route: string) {
  if (!route) return '/';
  if (route === '' || route[0] !== '/') return `/${route}`;
  return route;
}

function getQueryString(query: Query) {
  const queryParts = [];

  for (const key in query) {
    queryParts.push(`${key}=${query[key]}`);
  }

  return queryParts.join('&');
}

function applyParameters(route: string, params: Params, query: Query) {
  const routeParts = route.split('/');
  const parameterized: string[] = [];

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

function useNavigate(page: string, navigationType: NavigationType) {
  const route = slashify(page);
  const history = useHistory();
  return (params = {}, query = {}, state = {}) =>
    history[navigationType](applyParameters(route, params, query), state);
}

function useRedirect(page: string) {
  return useNavigate(page, 'push');
}

function useReplace(page: string) {
  return useNavigate(page, 'replace');
}

function getQueryObject(queryString: string) {
  if (!queryString) return {};

  const _queryString = queryString.slice(1);
  const queryParts = _queryString.split('&');
  const queryObject: Query = {};
  queryParts.forEach(part => {
    const [key, value] = part.split('=');
    if (key && value) queryObject[key] = value;
  });

  return queryObject;
}

export { useRedirect, useReplace, routes, getQueryObject };
