import React from "react";
import { useLocation } from "react-router-dom";
import { getQueryObject } from "../../utils/navigation";
import { useFetch } from "../../utils/fetch";

const SearchPage: React.FC = () => {
  const queryString = useLocation().search;
  const query = getQueryObject(queryString).query;
  const results = useFetch("get", `/search${queryString}`);
  console.log({ results });

  return <h1>Search results for "{query}"</h1>;
};

export default SearchPage;
