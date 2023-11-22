const fizzBuzz = (begin, end) => {
  if (begin > end) return;

  for (let i = begin; i <= end; i += 1) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
    // switch (true) {
    //   case i % 15 === 0:
    //     console.log("FizzBuzz");
    //     break;
    //   case i % 3 === 0:
    //     console.log("Fizz");
    //     break;
    //   case i % 5 === 0:
    //     console.log("Buzz");
    //     break;
    //   default:
    //     console.log(i);
    //     break;
    // }
  }
};

export default fizzBuzz;
