import React from "react";

export class ClickTracker extends React.Component {

    state = {last: ""}

    tracker = (event) => {
        this.setState(() => {
            return {
                last: event.target.innerText
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.tracker}>button 1</button>
                <button onClick={this.tracker}>button 2</button>
                <button onClick={this.tracker}>button 3</button>
                <h1>The last button is: {this.state.last}</h1>
            </div>
        )
    }
}