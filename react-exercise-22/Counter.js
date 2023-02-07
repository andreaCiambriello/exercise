import React from "react";
import { CounterDisplay } from "./CounterDisplay";

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
        return <CounterDisplay count={this.state.count}/>
    }
}