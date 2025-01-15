import AppHeading from "./components/AppHeading";
import CalculationDisplay from "./components/CalculationDisplay";
import ButtonsContainer from "./components/ButtonsContainer";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Passing Children
// 1. children is a special prop for passing elements into components.
// 2. Used for flexibility and readability of components designs.
// 3. Common in layout or container components.
// 4. Accessed with props.children and {children}.
// 5. Can be any content: string, number, jsx or components.
// 6. Enhances the component compatibility and readability.

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
