import React from "react";

export class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const type = event.target.type;
        const checked = event.target.checked;

        this.setState({
            [name]: type === "checkbox" ? checked : value
        })
    }
    
    render() {
        return (
            <div>
                <labe>Username</labe>
                <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
                <labe>Password</labe>
                <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
                <labe>Remember</labe>
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange}/>
            </div>
        )
    }
}