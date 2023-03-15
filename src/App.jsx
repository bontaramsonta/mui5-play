// import reactLogo from "./assets/react.svg";
import { Button } from "@mui/material";
import useStyles from "./AppStyles";

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Button
        variant="outlined"
        sx={{ ...classes.myButton, ...classes.highlyPadded }}
      >
        Outlined
      </Button>
    </div>
  );
}

export default App;
