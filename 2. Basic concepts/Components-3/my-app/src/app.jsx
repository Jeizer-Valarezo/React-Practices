import { createRoot } from 'react-dom/client'
import { Respuestas } from './Respuestas'

const RespuestasElement = <Respuestas/>

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(RespuestasElement)