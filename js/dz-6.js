const isPerfect = (num) => {
  let result = 1;

  for (let i = 2; i < Math.pow(num, 0.5); i++) {
    if (num % i === 0) {
      result += i + num / i;
    }
  }

  return result === num;
};

const testNumber = 28;

console.log(testNumber, isPerfect(testNumber));
