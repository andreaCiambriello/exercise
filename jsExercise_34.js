function printAsyncName(callback, name) {
    setTimeout(callback, 1000);
    setTimeout(() => console.log(name), 2000);
}

printAsyncName(() => console.log("Hello"), "Andrea");

//perchè l'arrow function è una funzione anonima e breve che non 
//viene riutilizzata come una normale funzione, per questo utile 
//con le callback