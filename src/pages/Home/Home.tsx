import { Container } from "@chakra-ui/react";
import React from "react";
import Search from "../../components/Search";

const Home = () => {
  const handleSearchQuery = (data: any) => {
    console.log("Response is:", data);
  };

  return (
    <>
      <Search onSearch={handleSearchQuery} />
    </>
  );
};

export default Home;
