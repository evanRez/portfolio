import { createMuiTheme } from "@material-ui/core/styles";

import orange from "@material-ui/core/colors/orange";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(51, 80, 69)",
    },
    secondary: orange,
  },
});

export default theme;
