import React from "react"
import { Welcome } from "./Welcome"

export class App extends React.Component {
    render() {
        return ( 
            <div>
                <Welcome name={<strong>Andrea</strong>} age={21} />
            </div>
        )
    }
}

//una espressione JSX viene passata alla prop utilizzando la sintassi con le parentesi graffe che racchiudono
//il contenuto da passare
//se passiamo una espressione JSX a name invece che una stringa, verrà fatto il render dell'espressione e
//quindi del contenuto, che può essere qualsasi tipo di dato: numero, boleano, array ecc... e anche stringa