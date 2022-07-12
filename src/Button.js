import React from "react";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";

const Button1 = () => {
  return (
    <div>
      <Button
        variant="contained"
        size="small"
        href="https://mui.com/material-ui/react-button/"
        startIcon={<Delete />}
        endIcon={<Delete />}
      >
        Click Me
      </Button>

      <Delete />
    </div>
  );
};

export default Button1;
