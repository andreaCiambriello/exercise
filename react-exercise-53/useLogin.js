import { useState } from "react";

export function useLogin() {
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    function handleInputChange(event) {
        const { name, value } = event.target;

        setData({
            [name]: value,
        })
    }

    return {
        username: data.username,
        password: data.password,
        onInputChange: handleInputChange
    }
}