import React from "react"
import { Sum } from "./Sum"

const numbers = [1, 2, 3, 4, 5]

export class App extends React.Component {
    render() {
        return (
            <Sum numbers={numbers} />
        )
    }
}