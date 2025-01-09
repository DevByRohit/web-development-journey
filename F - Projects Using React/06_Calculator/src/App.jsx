// import Buttons from "./components/Buttons";
import CalculationTextArea from "./components/CalculationTextArea";
import ButtonContainer from "./components/ButtonContainer";
import "./App.css";

function App() {
  let symbols = [
    "AC",
    "%",
    "X",
    "D",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    "00",
    0,
    ".",
    "=",
  ];
  return (
    <>
      <h1 className="projectName">Calculator Using React</h1>
      <div className="container">
        <CalculationTextArea></CalculationTextArea>
        <ButtonContainer symbolsArr={symbols}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
