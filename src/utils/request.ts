import axios from 'axios';
import { getToken, removeToken } from '../data/token';
import { RequestMethod } from './request.types';

function getAccessToken() {
  return `Bearer ${getToken()}`;
}

interface RequestBody {
  [key: string]: any;
}

const noBodyRequestMethods = new Set(['get', 'delete']);
const withBodyRequestMethods = new Set(['post', 'put']);
export default async function request(
  method: RequestMethod,
  url: string,
  body: RequestBody = {}
) {
  const config = {
    headers: {
      Authorization: getAccessToken(),
    },
  };

  try {
    if (noBodyRequestMethods.has(method)) {
      return await axios[method](url, config);
    }
    if (withBodyRequestMethods.has(method)) {
      return await axios[method](url, body, config);
    }
  } catch (error) {
    if (error.response.status === 401) removeToken();
  }
}
