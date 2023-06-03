import { Container } from "@chakra-ui/react";
import React, { useState, useCallback, useMemo } from "react";
import Search from "../../components/Search";
import { debounce } from "lodash";
import { useQuery } from "@apollo/client";
import { GET_CONTENT_CARDS } from "../../queries/query";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const { loading, error, data } = useQuery(GET_CONTENT_CARDS, {
    variables: { keyword },
  });

  const { edges } = data?.contentCards || {};
  console.log({ edges });

  const handleSearchQuery = useCallback((value: string) => {
    setKeyword(value);
  }, []);

  // Debounce the search term changes with a 300ms delay and cache the output
  const debouncedSearch = useMemo(() => {
    return debounce(handleSearchQuery, 300);
  }, []);

  return (
    <>
      <Search onSearch={handleSearchQuery} />
    </>
  );
};

export default Home;
