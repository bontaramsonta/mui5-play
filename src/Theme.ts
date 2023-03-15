import { createTheme } from "@mui/material/styles";
import { blue, orange, red } from "@mui/material/colors";

const theme = createTheme({
  status: {
    danger: orange[500],
    ok: blue[400],
  },
  palette: {
    primary: {
      main: red[500],
    },
  },
});

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
      ok: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
      ok?: string;
    };
  }
}
export default theme;
