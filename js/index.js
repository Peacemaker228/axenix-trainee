console.log("Program started");

const firstPromise = new Promise((res) => {
  setTimeout(() => {
    res({ data: "Hello, friend!", error: null });
  }, 5000);
});

const secondPromise = new Promise((res) => {
  setTimeout(() => {
    res("First promise chain complete!");
  }, 2000);
});

const thirdPromise = new Promise((res) => {
  setTimeout(() => {
    res("Second promise chain complete!");
  }, 10000);
});

console.log("Program in progress...");

firstPromise
  .then((res) => {
    console.log(res);
    return secondPromise;
  })
  .then((res) => console.log(res));

firstPromise.then((res) => {
  return secondPromise
    .then(() => {
      console.log(res);
      return thirdPromise;
    })
    .then((res) => console.log(res));
});
