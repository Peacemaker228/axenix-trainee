const fetchFast = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res("Fast Done!");
    }, 2000);
  });
};

const fetchSlow = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res("Slow Done");
    }, 6000);
  });
};

console.log("Program starting...");

const getSpeed = async () => {
  try {
    const fast = await fetchFast();
    console.log(fast);

    const slow = await fetchSlow();
    console.log(slow);
  } catch (error) {
    console.error(error);
  }
};

getSpeed().then(() => console.log("Program complete!"));

// процесс займет 9 секунд, т.к. await блокирует поток
// присвоить промисы переменным, а потом их вызвать:

// const getSpeed = async () => {
//   try {
//     const fast = fetchFast();
//     const slow = fetchSlow();

//     await fast;
//     console.log(fast);
//     await slow;
//     console.log(slow);
//   } catch (error) {
//     console.error(error);
//   }
// };
