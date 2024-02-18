import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";
import "./index.css"

const AppElement = <App />;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<StrictMode>{AppElement}</StrictMode>);
