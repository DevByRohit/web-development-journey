import AppHeading from "./components/AppHeading";
import CalculationDisplay from "./components/CalculationDisplay";
import ButtonsContainer from "./components/ButtonsContainer";
import Container from "./components/Container";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Passing Children
// 1. children is a special prop for passing elements into components.
// Used for flexibility and readability of components designs.
// Common in layout or container components.
// Accessed with props.children and {children}.
// Can be any content: string, number, jsx or components.
// Enhances the component compatibility and readability.

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
      <Container>
        <AppHeading></AppHeading>
      </Container>
      <Container>
        <div className="container">
          <CalculationDisplay></CalculationDisplay>
          <ButtonsContainer symbolsArr={symbols}></ButtonsContainer>
        </div>
      </Container>
      <Container>
        <h2>This calculator UI(user interface) made by Rohit</h2>
      </Container>
    </>
  );
}

export default App;
