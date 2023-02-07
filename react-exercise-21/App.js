import React from "react"
import { Counter } from "./Counter"

export class App extends React.Component {
    render() {
        return (
            <div>
                <Counter initialValue={5} increment={2} interval={2000}/>
            </div>
        )
    }
}