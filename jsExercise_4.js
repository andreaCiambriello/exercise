function sumUntil(maxValue) {
    let arr = [];
    let sum = 0;
    for (i=0; i<=maxValue ;i++) {
      arr[i] = i;
      sum = sum + arr[i];
    }
    return sum;
  }
  
  console.log(sumUntil(5));