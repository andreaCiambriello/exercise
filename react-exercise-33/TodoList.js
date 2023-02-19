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

    render() {
        return (
            <div>
                <form ref={this.listRef} onSubmit={this.handleSendList}>
                    <input name="list" type="text"></input>
                    <button name="button" type="submit">Send</button>
                </form>
                <ul>
                    {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        )
    }
}

//Commento: è lo stesso codice dell'esercizio precedente, avevo già inserito la cancellazione dell'input