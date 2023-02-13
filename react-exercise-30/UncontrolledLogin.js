import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
    _formRef = createRef()
    
    handleFormSubmit = (event) => {
        event.preventDefault()
        
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        })
    }
    
    render() {
        return (
            <div>
                <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                    <input name="username" type="text"/>
                    <input name="password" type="password"/>
                    <input name="remember" type="checkbox" />
                    <button name="button" type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}