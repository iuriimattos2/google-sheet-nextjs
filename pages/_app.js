import { ChakraProvider } from "@chakra-ui/react";
import "../scss/styles.scss";

function GoogleSheetApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default GoogleSheetApp;
