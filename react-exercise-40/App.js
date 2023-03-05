import React from "react"
import { TodoList } from "./TodoList"

export class App extends React.Component {
    render() {
        return (
            <div>
                <TodoList 
                    render={(items, handleSendList, handleRemove, handleReset, listRef) => (
                        <div>
                            <form ref={listRef} onSubmit={handleSendList}>
                                <input name="list" type="text"></input>
                                <button name="button" type="submit">Send</button>
                                <button type="button" onClick={handleReset}>Reset</button>
                            <ul>
                                {items.map((item, index) => 
                                    <li key={index}>
                                    {item} <button type="button" onClick={() => handleRemove(index)}>Remove</button>
                                </li>)}
                            </ul>  
                        </form>
                    </div>
                )} />
            </div>
        )
    }
}