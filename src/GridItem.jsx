import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

function GridItem({ children, ...props }) {
  return (
    <Grid item {...props}>
      {children}
    </Grid>
  );
}

export default GridItem;
