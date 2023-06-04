import { Container } from "@chakra-ui/react";
import Home from "./pages/Home";
import theme from "./styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./styles/App.css";

const client = new ApolloClient({
  uri: "https://api.tigerhall.net/v2/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Container maxWidth="sm" pt={6} pl={12} pr={12} mx="auto">
          <Home />
        </Container>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
