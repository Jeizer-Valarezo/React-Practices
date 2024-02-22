import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { Root } from "./Root";



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<StrictMode><Root/></StrictMode>);
