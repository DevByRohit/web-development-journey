function DynamicComponent(props) {
  let name = "Rohit with dynamic component";
  let greeting = () => {
    return <h1>Hi am a funtion</h1>;
  };
  return (
    <div>
      <h2>This is a dynamic component created using React.</h2>
      <p>My name is: {props.name}.</p>
      <p>My name is: {name}.</p>
      <p>I am {props.age} years old.</p>
      {greeting()}
    </div>
  );
}

export default DynamicComponent;
