import { useEffect, useState } from 'react';
import axios from 'axios';

import { RequestMethod } from './request.types';
import config from '../env/config';

function useFetch(method: RequestMethod, url: string, body?: Record<string, any>, defaultValue?: any) {
  const _url = url[0] === '/' ? `${config.get('domain')}${url}`: url;
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios[method](_url, body || {});
      setData(response.data);
    }
    fetch();
  }, [body, method, _url]);

  return data;
}

export { useFetch };
