import { useCounter } from "./useCounter"

export const Counter = () => {
    const { counter, onIncrement, onDecrement, onReset} = useCounter(0)

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={onIncrement}>Incerement</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}