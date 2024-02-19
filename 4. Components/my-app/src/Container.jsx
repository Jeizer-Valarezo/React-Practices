import { useState } from "react"
import classes from "./Container.module.scss"

export function Container({title, children}) {
  const [collapsed, setCollapsed] = useState(false)

  function handleToggleCollapse(){
    setCollapsed((t) => !t)
  }

  return (
    <div className="app" >
      <div className="app-title">
        {title} <button onClick={handleToggleCollapse}>Toggle</button>
      </div>
      <div className={!collapsed ?"app-content": "app-content-hidden"}>{children}</div>
    </div>
  )
}
