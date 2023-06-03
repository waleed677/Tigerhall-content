import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import React from "react";

const Search = () => {
  return (
    <>
      <InputGroup bg="brand.900">
        <InputLeftElement>
          <Search2Icon color="gray.100" mt={2} />
        </InputLeftElement>
        <Input size="lg" />
      </InputGroup>
    </>
  );
};

export default Search;
