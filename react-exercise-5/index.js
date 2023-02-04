import React from "react"
import ReactDOM from "react-dom";

class Hello extends React.Component {
    render() {
        return <h1>"Hello, World!"</h1>
    }
}

const root = document.querySelector("#root");
ReactDOM.render(<Hello />, root);