import axios from 'axios';
import { getToken, removeToken } from '../data/token';

function getAccessToken() {
  return `Bearer ${getToken()}`;
}

type HttpMethod = 'get' | 'post' | 'put' | 'delete';
interface RequestBody {
  [key: string]: any;
}

const noBodyRequestMethods = ['get', 'delete'];
const withBodyRequestMethods = ['post', 'put'];
export default async function request(method: HttpMethod, url: string, body: RequestBody = {}) {
  const config = {
    headers: {
      Authorization: getAccessToken(),
    },
  };

  try {
    if (noBodyRequestMethods.includes(method)) {
      return await axios[method](url, config);
    }
    if (withBodyRequestMethods.includes(method)) {
      return await axios[method](url, body, config);
    }
  } catch (error) {
    if (error.response.status === 401) removeToken();
  }
}
