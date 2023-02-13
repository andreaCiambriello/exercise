import React from "react";

export class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleLogin = () => {
        this.props.onLogin(this.state)
    }

    handleResetInput = () => {
        this.setState({
            username: "",
            password: ""
        })
    }
    
    render() {
        return (
            <div>
                <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
                <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
                <button name="button" type="button" disabled={!this.state.username || !this.state.password} onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleResetInput}>Reset</button>
            </div>
        )
    }
}