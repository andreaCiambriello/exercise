import React, { useState } from "react";

export function ClickCounterFunction() {
    const [counter, setCounter] = useState(0);

    function handleCounterIncrement() {
        setCounter((c) => c + 1)
    }

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={handleCounterIncrement}>Click to add!</button>
        </div>
    )
}