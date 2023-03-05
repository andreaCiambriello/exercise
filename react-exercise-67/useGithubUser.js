import useSWR from "swr";

async function fetcher(url) {
    const response = await fetch(url);
    return response.json()
}

export function useGithubUser(username) {
    const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetcher)

    return {
        data,
        error,
        loading: !data && !error
    }
}