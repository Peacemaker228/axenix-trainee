const isPerfect = (num) => {
  let result = [1];
  for (let i = 2; i < Math.pow(num, 0.5); i++) {
    if (num % i == 0) {
      result.push(i);
      result.push(num / i);
    }
  }
  result = result.reduce((acc, curr) => (acc += curr), 0);
  return result === num;
};

const testNumber = 7;

console.log(testNumber, isPerfect(testNumber));
