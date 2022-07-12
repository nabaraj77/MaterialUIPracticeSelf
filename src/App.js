import React from "react";
import "./App.css";
import Button from "./Button";
import Checkbox1 from "./Checkbox1";
import Alert1 from "./Alert1";
import RadioBtn from "./RadioBtn";
import Slider1 from "./Slider1";
import RangeSelectorPractice from "./RangeSelectorPractice";
import SelectPractice from "./SelectPractice";
import TextFieldPrac from "./TextFieldPrac";
import SwitchPrac from "./SwitchPrac";
import BoxPrac from "./BoxPrac";

const App = () => {
  return (
    <div className="App">
      <h1>Hello Material UI</h1>
      <Button>Click ME</Button>
      {/* <ButtonGroup /> */}
      <Checkbox1 />
      <Alert1 />
      <RadioBtn />
      <Slider1 />
      <RangeSelectorPractice />
      <SelectPractice />
      <TextFieldPrac />
      <SwitchPrac />
      <BoxPrac />
    </div>
  );
};

export default App;
