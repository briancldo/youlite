import React from 'react';
import { useLocation } from 'react-router-dom';
import { getQueryObject } from '../../utils/navigation';
import { useFetch } from '../../utils/fetch';

export default function SearchPage() {
  const queryString = useLocation().search;
  const query = getQueryObject(queryString).query;
  const results = useFetch('get', `/search${queryString}`);

  return <h1>Search results for "{query}"</h1>;
}
