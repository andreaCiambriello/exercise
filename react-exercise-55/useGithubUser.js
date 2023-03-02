import { useState, useEffect } from "react"

export function useGithubUser(username) {
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
    return {
        data,
        error,
        loading
    }
}

//  il codice è lo stesso dell'esercizio precedente (react-exercise-54), avevo gia messo le cose richieste in questa traccia nel precedente