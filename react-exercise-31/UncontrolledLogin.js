import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
    inputRef = createRef();
    formRef = createRef();
    
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

    componentDidMount () {
        this.inputRef.current.focus();
    }
    
    render() {
        return (
            <div>
                <form ref={this.formRef} onSubmit={this.handleFormSubmit}>
                    <input name="username" type="text" ref={this.inputRef}/>
                    <input name="password" type="password" />
                    <input name="remember" type="checkbox" />
                    <button name="button" type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}