import { useCallback, useState } from "react";

export function useCounter() {
    const [counter, setCounter] = useState(0)

    const handleIncrement = useCallback(function () {
        setCounter(c => c + 1)
    }, [])
    
    const handleDecrement = useCallback(function () {
        setCounter(c => c - 1)
    }, [])
    
    const handleReset = useCallback(function () {
        setCounter(0)
    }, [])

    return {
        counter,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onReset: handleReset
    }
}