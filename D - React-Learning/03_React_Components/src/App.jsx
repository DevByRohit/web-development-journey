import ComponentOne from "./FirstComp";
import DynamicComponent from "./DynamicComp";

function App() {
  return (
    <div>
      <h1>Hi my name is Rohit Genius</h1>
      <ComponentOne></ComponentOne>
      <DynamicComponent name="Sandeep" age="21"></DynamicComponent>
    </div>
  );
}

export default App;
