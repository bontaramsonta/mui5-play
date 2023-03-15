// import reactLogo from "./assets/react.svg";
import { Button } from "@mui/material";
import useAppStyles from "./AppStyles";

function App() {
  const classes = useAppStyles();
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
