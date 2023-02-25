import React from "react";

export class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <div>{this.props.title}</div>
                {this.props.children}
            </div>
        )
    }
}