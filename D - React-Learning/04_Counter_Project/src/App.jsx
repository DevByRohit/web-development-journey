import { useState } from "react";
function CreateCounter() {
  let [counter, setCounter] = useState(0);
  function setValue() {
    if (counter < 20) {
      counter++;
      setCounter(counter);
    }
  }

  function removeValue() {
    if (counter > 0) {
      counter--;
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Current Count: {counter}</h2>
      <button onClick={setValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default CreateCounter;
