import React from "react"

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: this.props.initialValue};
    
    setInterval(() => {
        this.setState((state) => {
            return {
                count: state.count + this.props.increment
            }
        })
    }, this.props.interval)
}

    render() {
        return (
            <h1>Counter: {this.state.count}</h1>
        )
    }
}