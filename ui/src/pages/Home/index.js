import React, { useState, useEffect } from 'react';

import { useFetch } from '../../utils/fetch';

export default function HomePage() {
  const data = useFetch('get', 'http://localhost:5000/', {}, '');

  return <p>{data}</p>;
}
