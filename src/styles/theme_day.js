import { createTheme } from "@material-ui/core";
import { blue, red, amber } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    type: "light",
    primary: amber,
    secondary: blue,
  },
  spacing: 5,
});

export default theme;