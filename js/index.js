console.log("Program started");

const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000);
  setTimeout(reject, 2000);
});

console.log("Program in progress");

promise.then(
  () => console.log("Program complete"),
  () => console.log("Program failure")
);
