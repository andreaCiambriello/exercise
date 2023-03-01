import React, { useEffect, useState } from "react";

export function ClickCounter({ onCounterChange }) {
    const [counter, setCounter] = useState(0);

    function handleCounterIncrement() {
        setCounter((c) => c + 1)
    }

    useEffect(() => {
        onCounterChange(counter)
    }, [counter, onCounterChange])

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={handleCounterIncrement}>Click to add!</button>
        </div>
    )
}