import { useEffect, useState } from "react"

export function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const _interval = setInterval(() => {
            setCount((c) => c + 1)
        }, 1000)

        return () => {
            clearInterval(_interval)
        }
    }, [])
    
    return (
        <div>
            <h1>Counter: {count}</h1>
        </div>
    )
}