import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = {
        name: ""
    }

    handleInputSet = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <input name="name" value={this.state.name} onChange={this.handleInputSet}/>
                <Welcome name={this.state.name} />
            </div>
        )
    }
}