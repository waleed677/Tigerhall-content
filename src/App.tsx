import { Container } from "@chakra-ui/react";
import Home from "./pages/Home";
import theme from "./styles/Theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.tigerhall.net/v2/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Container as="main" maxWidth="sm" pt={6} pl={12} pr={12} mx="auto">
          <Home />
        </Container>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
