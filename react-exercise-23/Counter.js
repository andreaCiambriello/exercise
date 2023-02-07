import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
}

    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + 1
                }
            })
        }, 1000)
    }

    render() {
        return <CounterDisplay count={this.state.count}/>
    }
}

//  se inizializziamo l'intervallo dentro il metodo componentDidMount invece che dentro il costruttore, quest'ultimo ci serve solo per
//  inizializzare lo state e per passare le props con super. Inoltre lo state si può anche inizializzare fuori dal costruttore, con la 
//  sintassi state = {count: 0}, lasciando quindi al costruttore solo la funzione di passare le props