import { BrowserRouter } from "react-router-dom"
import { App } from "./App"
import "./index.scss"

export function Root(){
    return(
        <BrowserRouter>
            <App className="app"/>
        </BrowserRouter>
    )
}