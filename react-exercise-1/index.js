import React from "react"
import ReactDom from "react-dom"

const h1 = <h1>Hello, World!</h1>
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(h1);