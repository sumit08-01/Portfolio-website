import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { myTheme } from "./styles/theme";
import { FirebaseApp } from "./utils/firebase.js";

FirebaseApp.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={myTheme}>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
