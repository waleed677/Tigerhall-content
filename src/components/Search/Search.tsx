import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputLeftElement, InputGroup, Spinner } from "@chakra-ui/react";
import { useState, useCallback, ChangeEvent } from "react";

interface propsSearchData {
  onSearch: (searchTerm: string) => void;
}

const Search = ({ onSearch }: propsSearchData) => {
  const handleSearchData = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  }, []);

  return (
    <>
      <InputGroup bg="brand.900">
        <InputLeftElement>
          <Search2Icon color="white" mt={2} />
        </InputLeftElement>
        <Input
          type="text"
          size="lg"
          placeholder=""
          borderRadius={4}
          borderColor="gray.700"
          color="white"
          focusBorderColor="gray.700"
          onChange={handleSearchData}
        />
      </InputGroup>
    </>
  );
};

export default Search;
