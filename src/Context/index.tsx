import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import router from "../router";
import NavBar from "../components/NavBar";

const Context = (): JSX.Element => {
  return (
    <ChakraProvider>
      <NavBar />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default Context;
