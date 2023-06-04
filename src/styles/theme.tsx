import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#001315", // Replace with your desired background color
      },
    },
  },
  fonts: {
    body: `NeueMontreal-Regular,`,
  },
  colors: {
    gray: {
      700: "#797670",
      900: "#383733",
    },
    orange: {
      50: "#FFF9F6",
      600: "#FF5900",
    },
  },
});

export default theme;
