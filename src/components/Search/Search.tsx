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
      <InputGroup bg="brand.900" borderRadius={10} mb={6}>
        <InputLeftElement>
          <Search2Icon color="white" mt={2} />
        </InputLeftElement>
        <Input
          type="text"
          size="lg"
          placeholder=""
          borderRadius={10}
          borderWidth={1}
          borderStyle="solid"
          borderColor="brand.700"
          focusBorderColor="brand.700"
          borderLeftColor="brand.700"
          color="white"
          onChange={handleSearchData}
        />
      </InputGroup>
    </>
  );
};

export default Search;
