const firstPromise = new Promise((res) => {
  setTimeout(() => {
    res(10);
  }, 3000);
});

const secondPromise = new Promise((res) => {
  setTimeout(() => {
    res(20);
  }, 5000);
});

Promise.all([firstPromise, secondPromise]).then((res) =>
  console.log(res.reduce((acc, curr) => (acc += curr), 0))
);
