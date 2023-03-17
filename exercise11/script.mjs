function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  };

  luckyDraw("Joe")
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .then(() => luckyDraw("Caroline"))
  .then((res2) => console.log(res2))
  .catch((err) => console.error(err))
  .then(() => luckyDraw("Sabrina"))
  .then((res3) => console.log(res3))
  .catch((err) => console.error(err));