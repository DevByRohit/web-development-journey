import ComponentOne from "./Components/CompoOne.jsx";
import "./App.css";

function App() {
  let obj = {
    name: "John Doe ",
    age: 30,
    city: " New York",
  };

  let array = ["about us ", "know more ", "contact us ", 7];
  return <ComponentOne name="know more" object={obj} array={array}></ComponentOne>;
}

export default App;
