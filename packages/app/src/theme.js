const primary = { main: "#302E53" };
const secondary = { main: "#D07017" };
const auxiliar = { main: "#1E2022" };

const theme = {
  typography: {
    fontFamily: "Roboto-condensed,Roboto,Arial",
  },
  pallete: {
    primary,
    secondary,
    auxiliar,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input": {
            padding: "5px 8px",
          }
        },
      },
    },
  },
};

export default theme;
