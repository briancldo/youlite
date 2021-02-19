import axios from 'axios';
import { getToken } from '../data/token';

function getAccessToken() {
  return `Bearer ${getToken()}`;
}

const noBodyRequestMethods = ['get', 'delete'];
const withBodyRequestMethods = ['post', 'put'];
export default async function request(method, url, body = {}) {
  const config = {
    headers: {
      Authorization: getAccessToken(),
    },
  };

  if (noBodyRequestMethods.includes(method)) {
    return await axios[method](url, config);
  }

  if (withBodyRequestMethods.includes(method)) {
    return await axios[method](url, body, config);
  }

  throw new Error(`Invalid method: ${method}`);
}
