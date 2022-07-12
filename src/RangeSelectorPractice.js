import React from "react";
import { Slider } from "@mui/material";
import { useState } from "react";

const RangeSelectorPractice = () => {
  const [val, setVal] = useState([20, 50]);

  const rangeHandler = (e) => {
    console.log(`Range Selected: ${val}`);
    setVal(e.target.value);
  };
  return (
    <div style={{ width: 300 }}>
      <Slider value={val} onChange={rangeHandler} />
    </div>
  );
};

export default RangeSelectorPractice;
