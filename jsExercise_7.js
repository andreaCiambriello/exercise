//SOLUZIONE 1
// function printName() {
//     let helloName = "Hello John";
//     function inner() {
//         return helloName;
//     }
//     return inner;
// }
// setTimeout(() => console.log(printName()()), 1000);


//SOLUZIONE 2
function printName() {
    let helloName = "Hello John";
    setTimeout(function inner() {
                console.log(helloName) }, 
                1000);
}

printName();

//COMMENTO ALL'ESERCIZIO
//entrambe le soluzioni funzionano, non sapendo quale delle due va bene, le carico entrambe
//ho commentato la prima per non creare errori nel terminale