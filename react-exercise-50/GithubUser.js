import { useState, useEffect } from "react"

export function GithubUser({ username }) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchUserDetails(username)
    }, [username])

    async function fetchUserDetails(username) {
        setLoading(true)
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()

            if(response.status !== 200) {
                setError(new Error())
            } else {
                setData(json)
            }
        } catch (error) {
            setError(error)
            setData(null)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error</h1>}
            {data && <h1>{data.name}</h1>}
        </div>
    )
}