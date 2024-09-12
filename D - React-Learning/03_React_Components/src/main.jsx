import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

function MyApp(props) {
  return (
    <>
      <p>My name is: {props.name}.</p>
      <p>My name is: {props.age}.</p>
      <p>My name is: {props.address}.</p>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <MyApp name="Rohit" age="21" address="Holambi Kalan, Delhi"></MyApp>
  </StrictMode>
);
