import React, {createRef} from "react";

export class TodoList extends React.Component {
    listRef = createRef();

    state = {
        items: []
    }

    handleSendList = (event) => {
        event.preventDefault()

        const newItem = event.target.elements.list.value
        if (newItem) {
            this.setState((prevState) => ({
                items: [...prevState.items, newItem]
            }))
            this.listRef.current.elements.list.value = ""
        }
    }

    handleReset = () => {
        this.setState(() => ({
            items: []
        }))
    }

    handleRemove = (index) => {
        this.setState((prevState) => ({
            items: prevState.items.filter((_, i) => i !== index)
        }))
    }

    render() {
        return (
            <div>
                <form ref={this.listRef} onSubmit={this.handleSendList}>
                    <input name="list" type="text"></input>
                    <button name="button" type="submit">Send</button>
                    <button type="button" onClick={this.handleReset}>Reset</button>
                    <ul>
                        {this.state.items.map((item, index) => 
                            <li key={index}>
                                {item} <button type="button" onClick={() => this.handleRemove(index)}>Remove</button>
                            </li>)}
                    </ul>  
                </form>
            </div>
        )
    }
}