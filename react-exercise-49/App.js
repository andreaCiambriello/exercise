import React, { useState } from "react"
import { Counter } from "./Counter"

export function App() {
    const [counter, setCounter] = useState(true)

    function handleCounter() {
        setCounter(c => !c)
    }
        return (
            <div>
                <button onClick={handleCounter}>Stop/Start counter</button>
                {counter && <Counter />}
            </div>
        )
    }
