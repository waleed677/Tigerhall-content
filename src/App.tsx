import { Container } from "@chakra-ui/react";
import Home from "./pages/Home";
function App() {
  return (
    <Container as="main" maxWidth="sm" pt={6} pl={12} pr={12} mx="auto">
      <Home />
    </Container>
  );
}

export default App;
