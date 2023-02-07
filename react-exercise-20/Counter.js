import React from "react"

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    
    setInterval(() => {
        this.setState((state) => {
            return {
                count: state.count + 1
            }
        })
    }, 1000)
}

    render() {
        return (
            <h1>Counter: {this.state.count}</h1>
        )
    }
}