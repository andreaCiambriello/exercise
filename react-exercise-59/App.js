import React from "react"
import { FilteredList } from "./FilteredList"

const list = [
    {name: "Andrea", id: 1, age: 21},
    {name: "Matteo", id: 2, age: 25},
    {name: "Domenico", id: 3, age: 22},
    {name: "Amalio", id: 4, age: 20},
    {name: "Luca", id: 5, age: 17}
]

export function App() {
        return (
            <div>
                <FilteredList userList={list}/>
            </div>
        )
    }