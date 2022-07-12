import React from "react";
import { Box, Button } from "@mui/material";

const BoxPrac = () => {
  return (
    <div>
      <p>Box || Layout</p>
      <Box
        sx={{
          width: "40%",
          height: 100,
          border: "1px solid red",
        }}
      >
        <Button
          color="success"
          size="small"
          variant="contained"
          sx={{
            marginLeft: 10,
          }}
        >
          Box Button
        </Button>
      </Box>
    </div>
  );
};

export default BoxPrac;
