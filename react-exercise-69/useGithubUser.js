import useSWR from "swr";

async function fetcher(url) {
    const response = await fetch(url);
    return response.json()
}

export function useGithubUser(username) {
    const { data, error, mutate } = useSWR(username ? `https://api.github.com/users/${username}`: null, fetcher)

    const handleRefresh = () => {
        mutate()
    }

    return {
        data,
        error,
        loading: !data && !error,
        onRefresh: handleRefresh
    }
}