// import reactLogo from "./assets/react.svg";
import { Button, SxProps, useTheme } from "@mui/material";

const classes: { [k: string]: SxProps } = {
  myButton: {
    borderColor: "success.main",
    color: "theme.status.ok",
  },
};

function App() {
  const theme = useTheme();
  console.log(theme);
  return (
    <div className="App">
      <Button variant="outlined" sx={classes.myButton}>
        Outlined
      </Button>
    </div>
  );
}

export default App;
