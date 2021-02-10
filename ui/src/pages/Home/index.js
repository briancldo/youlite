import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function HomePage() {
  const [query, setQuery] = useState('');

  function queryOnChange(event) {
    setQuery(event.target.value);
  }

  function executeSearch() {
    console.log(query);
  }

  return (
    <>
      <TextField value={query} onChange={queryOnChange} />
      <Button onClick={executeSearch}>Search</Button>
    </>
  );
}
