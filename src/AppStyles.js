import { useTheme } from "@mui/material";
const useStyles = () => {
  const theme = useTheme();
  console.log(theme)
  const classes = {
    myButton: {
      borderColor: theme.palette.success.main,
      color: theme.status.ok,
    },
    highlyPadded: {
      padding: "2rem .5rem",
    },
  };
  return classes;
};

export default useStyles;
