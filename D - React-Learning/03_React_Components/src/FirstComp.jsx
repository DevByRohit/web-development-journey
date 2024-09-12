/**
 * React Components
    At the heart of every React application lies components. Think of them as the building blocks of a React app. Each component is like a self-contained, reusable piece of UI that can be assembled to create complex interfaces.

 * React components can be broadly classified into two types:
    1. Functional Components (Modern Approach)
    2. Class Components (Legacy Approach, less common today)

    * 1. Functional Components: Functional components are JavaScript functions that return JSX, which is essentially a combination of HTML and JavaScript. They're simple, lightweight, and easier to work with.

    Example:
    function Greeting(props) {
        return <h1>Hello, {props.name}!</h1>;
    }


*/

function ComponentOne() {
  return (
    <>
      <div id="btns">
        <button>Know more</button>
        <button>Contact us</button>
        <button>About us</button>
      </div>
    </>
  );
}

export default ComponentOne;
