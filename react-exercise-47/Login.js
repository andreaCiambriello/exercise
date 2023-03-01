import React, { useState } from "react";

export function Login() {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })

    function handleInputChange(event) {
        const { name, type, value, checked } = event.target;

        setData({
            [name]: type === "checkbox" ? checked : value,
        })
    }

    const isDisabled = data.username === '' && data.password === ''

    function handleLogin({ onLogin }) {
        onLogin(data)
    }

    return (
        <div>
            <input name="username" type="text" value={data.username} onChange={handleInputChange} />
            <input name="password" type="password" value={data.password} onChange={handleInputChange} />
            <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange} />
            <button name="button" type="button" disabled={isDisabled} onClick={handleLogin}>Login</button>
        </div>
    )
}