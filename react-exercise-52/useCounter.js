import { useState } from "react";

export function useCounter() {
    const [counter, setCounter] = useState(0)

    function handleIncrement() {
        setCounter(c => c + 1)
    }

    function handleDecrement() {
        setCounter(c => c - 1)
    }

    function handleReset() {
        setCounter(0)
    }

    return {
        counter,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onReset: handleReset
    }
}