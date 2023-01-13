const isLogged = true;

function firstPromise(isLogged) {
   return new Promise((resolve, reject) => {
    let num = Math.random();
        if(isLogged === true) {
            resolve(num);
        } else {
            reject(new Error(`Not logged in!`));
        }
    })
}

function secondPromise(num) {
    console.log(num);                           //per vedere il numero random in console
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num > 0.5) {
                resolve({name: "John", age: 24});
            } else {
                reject(new Error(`error`));
            }
        }, 2000)
    })
}

firstPromise(isLogged)
    .then(secondPromise)
    .then((val) => console.log(val))
    .catch((err) => console.error(err))
    .finally(() => console.log(`I always run!`))