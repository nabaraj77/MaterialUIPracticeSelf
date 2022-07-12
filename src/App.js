import React from "react";
import "./App.css";
import Button from "./Button";
import Checkbox1 from "./Checkbox1";
import Alert1 from "./Alert1";
import RadioBtn from "./RadioBtn";

const App = () => {
  return (
    <div className="App">
      <h1>Hello Material UI</h1>
      <Button>Click ME</Button>
      {/* <ButtonGroup /> */}
      <Checkbox1 />
      <Alert1 />
      <RadioBtn />
    </div>
  );
};

export default App;
