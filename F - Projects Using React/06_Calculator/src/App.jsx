import CalculationTextArea from "./components/CalculationTextArea";
import ButtonContainer from "./components/ButtonContainer";
import "./App.css";
import { useState } from "react";

function App() {
  let [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "AC") {
      setCalValue("");
    } else if (buttonText === "=") {
      // Perform calculation here
      let result = eval(calValue);
      setCalValue(result);
    } else {
      let newValue = calValue + buttonText;
      setCalValue(newValue);
    }
  };

  return (
    <>
      <h1 className="projectName">Calculator Using React</h1>
      <div className="container">
        <CalculationTextArea displayValue={calValue}></CalculationTextArea>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
