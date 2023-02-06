import React from "react"
import { Welcome } from "./Welcome"

export class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name={<strong>Andrea</strong>} age={21}/>
            </div>
        )
    }
}