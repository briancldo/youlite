import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useRedirect, routes } from '../../utils/navigation';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const navigateToSearch = useRedirect(routes.search);

  function queryOnChange(event) {
    setQuery(event.target.value);
  }

  function executeSearch() {
    navigateToSearch({}, { query });
  }

  return (
    <>
      <TextField value={query} onChange={queryOnChange} />
      <Button onClick={executeSearch}>Search</Button>
    </>
  );
}
