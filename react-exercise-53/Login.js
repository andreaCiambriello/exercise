import { useLogin } from "./useLogin"

export function Login() {
    const { username, password, onInputChange } = useLogin()

    return (
        <div>
            <input name="username" type="text" value={username} onChange={onInputChange} />
            <input name="password" type="password" value={password} onChange={onInputChange} />
        </div>
    )
}