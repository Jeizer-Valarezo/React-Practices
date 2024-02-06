import { HelloWorld } from "./HelloWorld";
import { createRoot } from "react-dom/client";
const HelloWorldElement = (
    <div>
    <HelloWorld/>
    </div>
)

const root = createRoot(getElementById('root'))
createRoot(root)
root.render(HelloWorldElement)