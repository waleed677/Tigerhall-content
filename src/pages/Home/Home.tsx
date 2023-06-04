import { Container } from "@chakra-ui/react";
import React, { useState, useCallback, useMemo } from "react";
import Search from "../../components/Search";
import { debounce } from "lodash";
import { useQuery } from "@apollo/client";
import { GET_CONTENT_CARDS } from "../../queries/query";
import Loader from "../../components/Loader";
import ErrorAlert from "../../components/ErrorAlert";
import ContentList from "../../components/ContentCard/ContentList";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const { loading, error, data } = useQuery(GET_CONTENT_CARDS, {
    variables: { keyword },
  });

  const { edges } = data?.contentCards || {};
  const handleSearchQuery = useCallback((value: string) => {
    setKeyword(value);
  }, []);

  const debouceSearch = debounce(handleSearchQuery, 300);

  return (
    <section>
      <Search onSearch={handleSearchQuery} />

      {/* Show Loader */}
      {loading && <Loader />}

      {/* Show Content List Fetched from API */}
      {!loading && edges.length > 0 && <ContentList contentCards={edges} />}

      {/* No Data Found */}
      {!loading && edges.length === 0 && (
        <ErrorAlert message=" There are no matches for your query" />
      )}

      {/* Error Occurred */}
      {!loading && error && (
        <ErrorAlert message="Sorry, There is something wrong with your API call" />
      )}
    </section>
  );
};

export default Home;
