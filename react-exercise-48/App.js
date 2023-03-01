import React from "react"
import { ClickCounter } from "./ClickCounter"

export class App extends React.Component {
    render() {
        const handleCounterChange = (counter) => {
            console.log(`The counter is ${counter}`)
        }
        return (
            <ClickCounter onCounterChange={handleCounterChange} />
        )
    }
}