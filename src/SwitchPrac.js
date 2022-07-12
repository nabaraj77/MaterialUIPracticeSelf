import React from "react";
import Switch from "@mui/material/Switch";

const SwitchPrac = () => {
  const switchHandler = (e, value) => {
    console.log(e.target.checked);
  };
  return (
    <div>
      <Switch color="error" onChange={switchHandler} />
    </div>
  );
};

export default SwitchPrac;
