import React from "react";
import { ButtonGroup, Button } from "@mui/material";

const ButtonGroup1 = () => {
  return (
    <div>
      <ButtonGroup variant="contained" orientation="vertical">
        <Button href="google.com">One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <Button>Four</Button>
        <Button href="google.com">One</Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonGroup1;
