import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";
import { GET_CONTENT_CARDS } from "./query";
import { useState } from "react";

interface props {
  onSearch: (searchTerm: string) => void;
}

const apiEndPoint = "https://api.tigerhall.net/v2/";

const Search = ({ onSearch }: props) => {
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchTerm: string) => {};

  return (
    <>
      <InputGroup bg="brand.900">
        <InputLeftElement>
          <Search2Icon color="gray.100" mt={2} />
        </InputLeftElement>
        <Input
          type="text"
          size="lg"
          borderRadius={4}
          color="gray.300"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </InputGroup>
    </>
  );
};

export default Search;
