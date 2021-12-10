import React from "react";
import ReactDOM from "react-dom";
import App from "./view";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "./theme";

console.log(createTheme(theme));
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme(theme)}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
