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
        return this.props.render(
            this.state.items,
            this.handleSendList,
            this.handleRemove,
            this.handleReset,
            this.listRef
            )
    }
}