import React from "react";
import ReactDom from "react-dom";

function sum(a, b) {
    return <h2>"The result is {a + b}"</h2>
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(sum(2, 3));