import React from "react";

export class ClickCounter extends React.Component {
    
    state = {count: 0};

    counterIncrement = () => {
        this.setState((state) => {
            return {
                count: state.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.counterIncrement}>Click to add!</button>
            </div>
        )
    }
}