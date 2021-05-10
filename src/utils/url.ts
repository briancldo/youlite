function getQueryString(queryObject) {
  return Object.keys(queryObject).map(key => `${key}=${queryObject[key]}`).join('&');
}

function createCompleteUrl(baseUrl, query) {
  return `${baseUrl}?${getQueryString(query)}`;
}

export {
  createCompleteUrl,
}
