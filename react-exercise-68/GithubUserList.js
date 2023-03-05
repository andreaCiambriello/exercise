import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

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
                   <Link to={`${username}`}>{`Show ${username} name`}</Link>
                </li> )} 
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}