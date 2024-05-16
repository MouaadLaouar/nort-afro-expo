import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { I18nextProvider } from "react-i18next";
import router from "../router";
import NavBar from "../components/NavBar";
import i18n from "../i18n";

const Context = (): JSX.Element => {
  return (
    <ChakraProvider>
      <I18nextProvider i18n={i18n}>
        <NavBar />
        <RouterProvider router={router} />
      </I18nextProvider>
    </ChakraProvider>
  );
};

export default Context;
