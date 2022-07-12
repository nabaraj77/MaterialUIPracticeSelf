import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function SliderSizes() {
  const mark = [
    {
      value: 0,
      label: "Start",
    },
    {
      value: 50,
      label: "Half",
    },
    {
      value: 100,
      label: "End",
    },
  ];
  return (
    <>
      <Box width={200}>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          size="small"
          color="success"
        />
      </Box>
      <div style={{ height: 200 }}>
        <Slider
          size="small"
          valueLabelDisplay="auto"
          marks={mark}
          orientation="vertical"
        />
      </div>
    </>
  );
}
