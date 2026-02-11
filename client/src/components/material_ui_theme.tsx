import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#242424",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
    },
    primary: {
      main: "#646cff",
    },
    secondary: {
      main: "#535bf2",
    },
  },
  typography: {
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
    body1: {
      lineHeight: 1.5,
      fontWeight: 400,
    },
    h1: {
      fontSize: "3.2em",
      lineHeight: 1.1,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "#root": {
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "2rem",
          textAlign: "center",
        },
        body: {
          margin: 0,
          display: "flex",
          placeItems: "center",
          minWidth: "320px",
          minHeight: "100vh",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        a: {
          fontWeight: 500,
          color: "#646cff",
          textDecoration: "inherit",
          "&:hover": {
            color: "#535bf2",
          },
        },
        ".card": {
          padding: "2em",
        },
        ".read-the-docs": {
          color: "#888",
        },
        "@media (prefers-color-scheme: light)": {
          ":root": {
            color: "#213547",
            backgroundColor: "#ffffff",
          },
          a: {
            "&:hover": {
              color: "#747bff",
            },
          },
        },
      },
    },
  },
});

export default theme;
