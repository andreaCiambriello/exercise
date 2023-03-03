import React, { useMemo } from "react"

export function FilteredList({ userList }) {

    const filtered = useMemo(() => {
        return userList.filter(el => el.age > 18)
    }, [userList])

    return (
        <div>
            <h1>The filtered list is:</h1>
            <ul>
                {filtered.map(el => (
                  <li key={el.id}>
                    {el.name} - {el.age}
                </li>  
                ))}
                
            </ul>
        </div>
    )
}