import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#001315", // Replace with your desired background color
      },
    },
  },
  colors: {
    brand: {
      700: "#797670",
      900: "#383733",
    },
  },
});

export default theme;
