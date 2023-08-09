import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

function GridContainer({ children, ...props }) {
  return (
    <Grid container {...props}>
      {children}
    </Grid>
  );
}

export default GridContainer;
