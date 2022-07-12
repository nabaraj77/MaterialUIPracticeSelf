import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const SelectPractice = () => {
  const [course, setCourse] = useState("");
  const update = (e) => {
    console.log(e.target.value);
    setCourse(e.target.value);
  };
  return (
    <div>
      <p>Select Practice</p>
      <Select
        value={course}
        displayEmpty
        onChange={update}
        style={{ minWidth: 200 }}
      >
        <MenuItem value="" disabled>
          Select Items
        </MenuItem>
        <MenuItem value="Node JS">Node Js</MenuItem>
        <MenuItem value="React Js">React Js</MenuItem>
        <MenuItem value="Python">Python Nabaraj Dahal</MenuItem>
      </Select>
    </div>
  );
};

export default SelectPractice;
