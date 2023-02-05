import React from "react";

export class Welcome extends React.Component {
    render() {
        return <p>Welcome, {this.props.name ?? "Andrea"}!</p>
    }
}

//  se non diamo nessuno valore a name del componente Welcome in App.js, verrà eseguito il render del componente Welcome senza il valore 
//  della prop, ovvero: Welcome, !
//  ?? ci permette di settare un valore di default a name in caso di mancato inserimento del valore in App.js