import { useEffect, useState } from 'react';
import axios from 'axios';

import config from 'env';

type HttpMethod = 'get' | 'post' | 'put' | 'delete';

function useFetch(method: HttpMethod, url: string, body = {}, defaultValue: any) {
  const _url = url[0] === '/' ? `${config.get('domain')}${url}}`: url;
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios[method](_url, body);
      setData(response.data);
    }
    fetch();
  }, [body, method, _url]);

  return data;
}

export { useFetch };
