import React from "react";
import Radio from "@mui/material/Radio";
import { useState } from "react";

const RadioBtn = () => {
  const [gender, setGender] = useState("Male");

  const genderHandler = (e) => {
    console.log(e.target.value);
    setGender(e.target.value);
  };
  return (
    <div>
      <Radio
        value="Male"
        onChange={genderHandler}
        checked={gender === "Male"}
      />
      <Radio
        value="Female"
        onChange={genderHandler}
        checked={gender === "Female"}
      />
    </div>
  );
};

export default RadioBtn;
