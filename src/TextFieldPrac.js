import React from "react";
import TextField from "@mui/material/TextField";

const TextFieldPrac = () => {
  const textHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <p>Text Field Practice</p>
      <TextField
        onChange={textHandler}
        label="Enter Name"
        variant="standard"
        style={{ width: 300 }}
        color="success"
      />
    </div>
  );
};

export default TextFieldPrac;
