import { Query } from "./request.types";

function getQueryString(queryObject: Query) {
  return Object.keys(queryObject)
    .map((key) => `${key}=${queryObject[key]}`)
    .join("&");
}

function createCompleteUrl(baseUrl: string, query: Query) {
  return `${baseUrl}?${getQueryString(query)}`;
}

export { createCompleteUrl };
