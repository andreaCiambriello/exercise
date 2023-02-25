import React from "react"
import { Container } from "./Container"

export class App extends React.Component {
    render() {
        return (
            <Container title={<h1>This is a container Component</h1>}>
                <p>It renders its children</p>
            </Container>
        )
    }
}