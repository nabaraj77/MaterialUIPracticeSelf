import React from "react";
import { Grid } from "@mui/material";

const GridPrac = () => {
  return (
    <div>
      <p>I am from Grid</p>
      <Grid item container rowSpacing={1}>
        <Grid item lg="3" md="6" xs="12">
          <h1 style={{ backgroundColor: "green" }}>I am Box 1</h1>
        </Grid>
        <Grid item lg="3" md="6" xs="12">
          <h1 style={{ backgroundColor: "red" }}>I am Box 2</h1>
        </Grid>
        <Grid item lg="3" md="6" xs="12">
          <h1 style={{ backgroundColor: "red" }}>I am Box 3</h1>
        </Grid>
        <Grid item lg="3" md="6" xs="12">
          <h1 style={{ backgroundColor: "red" }}>I am Box 4</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default GridPrac;
