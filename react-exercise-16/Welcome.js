import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome, {this.props.name ?? "Andrea"}!</p>
                {this.props.age
                    ?<Age age={this.props.age}/>
                    :<p>Age is not rendered</p>}
            </div> 
            
        )
    }
}