import { Search2Icon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Input,
  InputLeftElement,
  InputGroup,
  Spinner,
  InputRightElement,
} from "@chakra-ui/react";
import { useState, useCallback, ChangeEvent } from "react";

interface propsSearchData {
  onSearch: (searchTerm: string) => void;
}

const Search = ({ onSearch }: propsSearchData) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchData = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  }, []);

  return (
    <>
      <InputGroup bg="gray.900" borderRadius={10} mb={6}>
        <InputLeftElement>
          <Search2Icon color="white" mt={2} />
        </InputLeftElement>
        <Input
          value={searchTerm}
          type="text"
          size="lg"
          placeholder=""
          borderRadius={10}
          borderWidth={1}
          borderStyle="solid"
          borderColor="gray.700"
          focusBorderColor="gray.700"
          borderLeftColor="gray.700"
          color="white"
          onChange={handleSearchData}
        />
        {searchTerm.length > 0 && (
          <InputRightElement>
            <SmallCloseIcon
              color="white"
              mt={2}
              onClick={() => setSearchTerm("")}
            />
          </InputRightElement>
        )}
      </InputGroup>
    </>
  );
};

export default Search;
