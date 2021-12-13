const primary = { main: "#302E53" };
const secondary = { main: "#D07017" };
const auxiliar = { main: "#1E2022" };

const theme = {
  typography: {
    fontFamily: "Roboto-condensed,Roboto,Arial",
    h1: {
      fontSize: "22pt",
    },
  },
  palette: {
    primary,
    secondary,
    auxiliar,

    text: {
      primary: auxiliar,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input": {
            padding: "5px 8px",
          },
          "& fieldset": {
            borderColor: "gray",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: "5px 8px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none"
        }
      }
    }
  },
};

export default theme;
