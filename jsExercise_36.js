function repeatHello(callback) {
    let output = setInterval(callback, 1000);
    setTimeout(() => clearInterval(output), 5000);
}

repeatHello(() => console.log("Hello"));