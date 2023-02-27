import React from "react";

export function Sum({ numbers }) {
    const sum = numbers.reduce((a, b) => a + b)

    return (
        <h1>The sum is: {sum}</h1>
    )
}