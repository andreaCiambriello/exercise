import React from "react";
import ReactDom from "react-dom";

function h1(name) {
    return <h1>"Hello, {name}"</h1>
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(h1("Andrea"));

//ALTERNATIVA:
// const root = document.querySelector("#root");
// ReactDom.render(h1("Andrea"), root);