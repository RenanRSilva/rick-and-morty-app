import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: { main: "#1d1d1f" },
    secondary: { main: "#90c747" },
    error: { main: red.A400 },
  },
});
export default theme;
