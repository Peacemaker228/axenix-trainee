const goGetCandies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ candy: "sour keys", quantity: 10 });
    }, 2000);
  });
};

const sellCandies = (obj) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(obj.quantity * 25);
    }, 3000);
  });
};

const getCandy = async () => {
  try {
    const candyData = await goGetCandies();
    const candyCent = await sellCandies(candyData);

    console.log(candyCent);
  } catch (error) {
    console.error();
  }
};

getCandy();
// vanilla ---

goGetCandies()
  .then((res) => sellCandies(res))
  .then((cent) => console.log(cent));

// предпочитаю первый вариант. Легче читается тоже первый, т.к. он пишется в виде обычного синхронного кода
