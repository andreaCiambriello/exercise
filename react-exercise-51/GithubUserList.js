import { useState } from "react"
import { GithubUser } from "./GithubUser"

export function GithubUserList() {
    const [usernames, setUsernames] = useState([])
    const [newItem, setNewItem] = useState("")

    function handleNewItem (event) {
        const newItem = event.target.value
        setNewItem(newItem)
    }

    function handleAddItem() {
        setUsernames([...usernames, newItem])
        setNewItem("")
    }

    return (
        <div>
            <label>Search a user:</label>
            <br />
            <input type="text" value={newItem} onChange={handleNewItem} />
            <button onClick={handleAddItem}>Add User</button>
            <ul>
                {usernames.map((username, index) => <li key={index}>
                    <GithubUser username={username} />
                </li> )} 
            </ul>
        </div>
    )
}