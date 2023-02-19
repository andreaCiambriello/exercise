import React from "react"
import ReactDom from "react-dom"
import { App } from "./App"
import "./index.css"

const root = document.querySelector("#root");
ReactDom.render(<App />, root);