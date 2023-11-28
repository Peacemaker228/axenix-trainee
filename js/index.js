console.log("Program started");

const firstPromise = new Promise((res) => {
  setTimeout(res, 3000);
});

const secondPromise = new Promise((res) => {
  setTimeout(() => res("Step 2 Complete"), 3000);
});

console.log("Program in progress...");

firstPromise
  .then(() => {
    console.log("Step 1 complete");
  })
  .then(() => secondPromise)
  .then((res) => console.log(res));
