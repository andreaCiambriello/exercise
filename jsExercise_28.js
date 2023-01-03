function sum(...arg) {
    return arg.reduce((a, b) => a + b);
  }
  
  const numbers = [1, 2, 3];
  const [...arg] = numbers;
  console.log(sum(...arg));