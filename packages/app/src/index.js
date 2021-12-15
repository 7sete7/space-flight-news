import React from "react";
import ReactDOM from "react-dom";
import App from "./view";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "./theme";
// import dotenv from "dotenv";

// if (process.env.NODE_ENV !== "production") {
//   const res = dotenv.config({ path: "../../.env" });
//   console.log(res);
// }

console.log(createTheme(theme));
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme(theme)}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
