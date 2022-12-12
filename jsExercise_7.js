function printName() {
    let helloName = "Hello John";
    function inner() {
        return helloName;
    }
    return inner;
}
setTimeout(() => console.log(printName()()), 1000);
