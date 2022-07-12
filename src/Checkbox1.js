import React from "react";

import { Favorite, FavoriteBorder } from "@mui/icons-material";

import Checkbox from "@mui/material/Checkbox";

const Checkbox11 = () => {
  const value = [];
  const changeHandler = (e) => {
    let data = value;
    data.push(e.target.value);
    console.log(data);
    //   console.log(e.target.checked);
    //   console.log(e.target.value);
  };
  return (
    <>
      <Checkbox value="Male" onChange={(e) => changeHandler(e)} />
      <Checkbox
        value="Female"
        onChange={(e) => changeHandler(e)}
        checkedIcon={<Favorite color="error" />}
        icon={<FavoriteBorder color="success" />}
      />
    </>
  );
};

export default Checkbox11;
