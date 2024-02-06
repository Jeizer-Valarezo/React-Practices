import { HelloWorld } from './HelloWorld'
import { createRoot } from 'react-dom/client'

const helloWorldElement = (
    <div>
        <HelloWorld/>
    </div>
)

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(helloWorldElement)