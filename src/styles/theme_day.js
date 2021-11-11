import { createTheme } from "@material-ui/core";
import { blue, red, amber } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    type: "light",
    primary: amber,
    secondary: blue,
  },
  spacing: 5,
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 900,
      lg: 1200,
      xl: 1536,
    }
  }
});

export default theme;