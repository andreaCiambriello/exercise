import React from "react";

export function Sum({ numbers = [1, 2, 3, 4, 5] }) {
    const sum = numbers.reduce((a, b) => a + b)

    return (
        <h1>The sum is: {sum}</h1>
    )
}

//se nessuna prop viene passata dall'esterno, è possibile settare un valore di default alla prop numbers