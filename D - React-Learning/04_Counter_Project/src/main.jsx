import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CreateCounter from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CreateCounter />
  </StrictMode>
);
